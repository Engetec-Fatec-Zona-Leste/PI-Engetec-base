
export type KnowledgeSubArea = {
    id?: string 
    activityDescription: string 
    activityName: string 
    bigArea: string
    area: string
    eventId?: string 
}

export interface IKnowledgeSubAreaRepository{
    create(KnowledgeSubArea: KnowledgeSubArea): Promise<KnowledgeSubArea>;
    read(): Promise<KnowledgeSubArea[]>;
    readActivity(id: string): Promise<KnowledgeSubArea | null>;
    update(KnowledgeSubArea: KnowledgeSubArea): Promise<KnowledgeSubArea>;
    delete(id: string): Promise<KnowledgeSubArea>;
}