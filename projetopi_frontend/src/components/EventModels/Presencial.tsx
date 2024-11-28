import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { DataLocalProps } from '@/app/criar-evento/[idEvento]/data/page';
import CheckInput from '@/components/CheckInput';
import DefaultButton from '@/components/DefaultButton';
import { showToast } from '@/contexts/ToastProvider';
import { checkboxPeriodo } from '@/mocks/checkboxes';
import { useSearchParams } from 'next/navigation';
import slugify from 'slugify';

const Presencial = ({ handleNextClick }: DataLocalProps) => {
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const nomeEvento = searchParams.get('evento');
  console.log('Nome do evento:', nomeEvento); // Verifique o nome do evento da URL

  // Aplica o slugify ao nome do evento
  const nomeURL = nomeEvento ? slugify(nomeEvento, { lower: true, strict: true }) : '';
  console.log(`URL de envio: http://localhost:3031/${nomeURL}/presencial`);


  const handleCheckboxChangePeriod = (periodId: string) => {
    setSelectedPeriods((prevSelected) =>
      prevSelected.includes(periodId)
        ? prevSelected.filter((id) => id !== periodId)
        : [...prevSelected, periodId]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Capturar os dados do formulário
    const formData = new FormData(e.currentTarget);
    const cep = formData.get('cep') as string;
    const local = formData.get('local') as string;
    const cidade = formData.get('cidade') as string;
    const estado = formData.get('estado') as string;
    const dataInicio = formData.get('dateInicio') as string;
    const dataFinal = formData.get('dateFinal') as string;
    const horarioInicio = formData.get('horaInicio') as string;
    const horarioFinal = formData.get('horaFinal') as string;

    // Períodos selecionados
    const manha = selectedPeriods.includes('Manhã');
    const tarde = selectedPeriods.includes('Tarde');
    const noite = selectedPeriods.includes('Noite');

    try {
      // Enviar os dados para a API
      const response = await axios.post(`http://localhost:3031/${nomeURL}/presencial`, {
        cep,
        local,
        cidade,
        estado,
        dataInicio,
        dataFinal,
        horarioInicio,
        horarioFinal,
        manha,
        tarde,
        noite,
      });

      // Verifica resposta da API para mensagens personalizadas
      if (response.status === 200) {
        showToast('success', 'Evento presencial cadastrado com sucesso!');
        handleNextClick(); // Avança para a próxima etapa
      }
    } catch (error: any) {
      console.error('Erro ao cadastrar evento presencial:', error);
      showToast(
		'error',
		'Erro ao cadastrar evento presencial: ' + 
		(error.response?.data?.error || error.message)
	  );
	  
    }
  };

  return (
    <div className="container mb-6 mt-52 flex justify-center">
      <div className="w-[60vw]">
        <h1
          className="text-center text-2xl font-bold text-black"
          style={{ color: '#ef0037' }}
        >
          Data e Local
        </h1>
        <form className="mt-8 w-full" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-10">
            <div className="w-full">
              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="cep">
                  CEP
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="text"
                    name="cep"
                    id="cep"
                    placeholder="CEP do Evento"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="estado">
                  Estado
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="text"
                    name="estado"
                    id="estado"
                    placeholder="Estado do Evento"
                    required
                  />
                </div>
              </div>

              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="dateInicio">
                  Data de Início
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="Date"
                    name="dateInicio"
                    id="dateInicio"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="horaInicio">
                  Horário de Início
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="time"
                    name="horaInicio"
                    id="horaInicio"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 ">
                <div className="flex items-center justify-center gap-10 text-center">
                  <label
                    className="text-center text-base font-medium"
                    htmlFor="evento"
                  >
                    Período:
                  </label>
                  <div className="flex items-center gap-3 py-6">
                    {checkboxPeriodo.map((name, index) => (
                      <CheckInput
                        label={name}
                        key={index}
                        name={name}
                        value={name}
                        checked={selectedPeriods.includes(name)}
                        onChange={() => handleCheckboxChangePeriod(name)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="local">
                  Local
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="text"
                    name="local"
                    id="local"
                    placeholder="Local do Evento"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="cidade">
                  Cidade
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="text"
                    name="cidade"
                    id="cidade"
                    placeholder="Cidade do Evento"
                    required
                  />
                </div>
              </div>

              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="dateFinal">
                  Data de Finalização
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="Date"
                    name="dateFinal"
                    id="dateFinal"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col">
                <label className="mb-2 text-sm font-medium" htmlFor="horaFinal">
                  Horário de Finalização
                </label>
                <div className="rounded-md border border-gray-300 bg-white px-4 py-2">
                  <input
                    className="w-full rounded-md border-0 bg-white text-sm outline-none"
                    type="time"
                    name="horaFinal"
                    id="horaFinal"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-5">
            <DefaultButton
              label="Avançar"
              variant="primary"
              size="lg"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Presencial;
