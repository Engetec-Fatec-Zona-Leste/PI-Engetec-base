import React from 'react';

const Formulario: React.FC = () => {
    // Informações pré-preenchidas
    const initialValues = {
        texto1: 'Este artigo tem como objetivo analisar as estratégias para o sucesso empresarial na era digital, destacando a importância da transformação digital como um meio fundamental para as organizações se adaptarem e prosperarem em um ambiente de negócios cada vez mais digitalizado.',
        texto2: 'This article aims to analyze strategies for business success in the digital age, highlighting the importance of digital transformation as a fundamental means for organizations to adapt and thrive in an increasingly digitized business environment.',
        texto3: 'A análise das estratégias para o sucesso empresarial na era digital é abrangente e embasada, fornecendo insights valiosos para os gestores e líderes que buscam se adaptar e aproveitar as oportunidades trazidas pela digitalização.',
        texto4: 'A pesquisa realizada é embasada e atualizada, permitindo uma compreensão aprofundada dos desafios e oportunidades que a transformação digital oferece. As palavras-chave selecionadas estão diretamente relacionadas ao assunto central do artigo, fornecendo uma visão clara do conteúdo abordado.',
        input1: 'Transformação Digital: Uma Análise das Estratégias para o Sucesso Empresarial na Era Digital',
        input2: 'Clara Santos, Gustavo Oliveira, Marina Almeida',
        input3: 'Clara Santos',
        input4: 'Estratégias, Sucesso Empresarial, Era Digital, Transformação Organizacional, Inovação Tecnológica, Mudança Digital',
        input5: 'Strategies, Business Success, Digital Age, Organizational Transformation, Technological Innovation, Digital Change',
        input6: 'Tecnologia,',
        input7: 'Tecnologia, Análise Estratégicas',
        input8: '13:30 até 14:30',
        input9: '03',

    };

    const handleVoltarClick = () => {
        // Implemente a lógica para voltar para a página anterior
    };

    return (
        <form className="bg-white w-[70%] p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1 grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="texto1" className="block mb-2 font-medium">Resumo:</label>
                        <textarea id="texto1" name="texto1" className="border-[#828282] w-full h-48 px-4 py-2 text-[18px] border rounded-lg font-medium overflow-y-hidden" placeholder="Texto 1" defaultValue={initialValues.texto1}></textarea>
                    </div>
                    <div>
                        <label htmlFor="texto2" className="block mb-2 font-normal">Abstract:</label>
                        <textarea id="texto2" name="texto2" className="border-[#828282] w-full h-48 px-4 py-2 text-[18px] border rounded-lg font-medium overflow-y-hidden" placeholder="Texto 1" defaultValue={initialValues.texto2}></textarea>
                    </div>

                    <div>
                        <label htmlFor="texto3" className="block mb-2 font-normal">Comentário do primeiro avaliador:</label>
                        <textarea id="texto3" name="texto3" className="bg-[#C6C6C6] w-full h-48 px-4 py-2 text-[18px] border rounded-lg font-medium overflow-y-hidden" placeholder="Texto 1" defaultValue={initialValues.texto3}></textarea>
                    </div>

                    <div>
                        <label htmlFor="texto4" className="block mb-2 font-normal">Comentário do segundo avaliador:</label>
                        <textarea id="texto4" name="texto4" className="bg-[#C6C6C6] w-full h-48 px-4 py-2 text-[18px] border rounded-lg font-medium overflow-y-hidden" placeholder="Texto 1" defaultValue={initialValues.texto4}></textarea>
                    </div>
                    <button onClick={handleVoltarClick} className="bg-[#5000F0] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center text-center justify-between">
                        <span></span>
                   <span className="text-white font-normal">Baixar Artigo</span>
                        <img src="/assets/Artigos/BaixarArtigo.png"  className="w-4 h-4 mr-2"/>
                </button>
                </div>
                <div className="col-span-1 grid grid-cols-1 gap-4">
                    <div className='mb-8'>
                        <label htmlFor="input1" className="block mb-2 font-normal">Título:</label>
                        <input type="text" id="input1" name="input1" className="w-full h-16 px-4 py-2 text-[18px] border border-[#828282] rounded-xl overflow-y-hidden" placeholder="Input 1" defaultValue={initialValues.input1} />
                    </div>
                    <div>
                        <label htmlFor="input2" className="block mb-2 font-normal">Autores:</label>
                        <input type="text" id="input2" name="input2" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl overflow-y-hidden" placeholder="Input 2" defaultValue={initialValues.input2} />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="input3" className="block mb-2 font-normal">Apresentador:</label>
                        <input type="text" id="input3" name="input3" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl overflow-y-hidden" placeholder="Input 3" defaultValue={initialValues.input3} />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="input4" className="block mb-2 font-normal">Palavras-Chaves:</label>
                        <input type="text" id="input4" name="input4" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl overflow-y-hidden" placeholder="Input 4" defaultValue={initialValues.input4} />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="input1" className="block mb-2 font-normal">Keyword:</label>
                        <input type="text" id="input1" name="input1" className="w-full h-16 px-4 py-2 text-[18px] border border-[#828282] rounded-xl overflow-y-hidden" placeholder="Input 1" defaultValue={initialValues.input5} />
                    </div>
                    <div>
                        <label htmlFor="input2" className="block mb-2 font-normal">Áreas de conhecimento:</label>
                        <input type="text" id="input2" name="input2" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl" placeholder="Input 2" defaultValue={initialValues.input6} />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="input3" className="block mb-2 font-normal">Subárea:</label>
                        <input type="text" id="input3" name="input3" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl" placeholder="Input 3" defaultValue={initialValues.input7} />
                    </div>
                    <div className='flex w-full justify-between gap-10 mt-8'>
                        <div className='w-full'>
                            <label htmlFor="input4" className="block mb-2 font-normal">Horário da sessão:</label>
                            <input type="text" id="input4" name="input4" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl" placeholder="Input 4" defaultValue={initialValues.input8} />
                        </div>

                        <div className='w-full'>
                            <label htmlFor="input4" className="block mb-2 font-normal">Sala:</label>
                            <input type="text" id="input4" name="input4" className="w-full h-12 px-4 py-2 text-[18px] border border-[#828282] rounded-xl" placeholder="Input 4" defaultValue={initialValues.input9} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-24">
                <button onClick={handleVoltarClick} className="bg-[#8A8A8A] hover:bg-gray-400 text-gray-800 font-bold py-2 px-20 rounded-xl inline-flex items-center">
                    <span className='text-white'>Voltar</span>
                </button>
            </div>
        </form>
    );
}

export default Formulario;
