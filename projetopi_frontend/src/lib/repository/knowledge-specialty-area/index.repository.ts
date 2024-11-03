
export type KnowledgeSpecialtyArea = {
    id?: string 
    activityDescription: string 
    activityName: string 
    subArea: string
    bigArea: string
    area: string
    eventId?: string 
}

export interface IKnowledgeSpecialtyAreaRepository{
    create(KnowledgeSpecialtyArea: KnowledgeSpecialtyArea): Promise<KnowledgeSpecialtyArea>;
    read(): Promise<KnowledgeSpecialtyArea[]>;
    readActivity(id: string): Promise<KnowledgeSpecialtyArea | null>;
    update(KnowledgeSpecialtyArea: KnowledgeSpecialtyArea): Promise<KnowledgeSpecialtyArea>;
    delete(id: string): Promise<KnowledgeSpecialtyArea>;
}