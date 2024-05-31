export type Arquivo = {
	id?: string;
	category: string;
	normasPub: string;
	needAvaliation: boolean;
	needApresentation: boolean;
	eventId?: string
};
export interface ISalaRepository {
	create(Arquivo: Arquivo): Promise<Arquivo>;
	read(): Promise<Arquivo[]>;
	readSala(id: string): Promise<Arquivo | null>;
	update(Arquivo: Arquivo): Promise<Arquivo>;
	delete(id: string): Promise<Arquivo>;
}
