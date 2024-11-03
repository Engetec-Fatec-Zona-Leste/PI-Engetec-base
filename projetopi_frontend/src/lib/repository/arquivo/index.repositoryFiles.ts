export type ArquivoConfig = {
    id?: string,
    dataInicioSubmissao: string,
    dataFimSubmissao: string,
    limiteAutoresPorArquivo: number,
    limiteAvaliadoresPorArquivo: number,
    dataInicioAvaliacao: string,
    dataFimAvaliacao: string,
    limiteArquivosPorAutor: number,
    modeloApresentacao: File,
    modeloArquivo: File,
}

export interface ISalaRepository {
	create(ArquivoConfig: ArquivoConfig): Promise<ArquivoConfig>;
	read(): Promise<ArquivoConfig[]>;
	readSala(id: string): Promise<ArquivoConfig | null>;
	update(ArquivoConfig: ArquivoConfig): Promise<ArquivoConfig>;
	delete(id: string): Promise<ArquivoConfig>;
}