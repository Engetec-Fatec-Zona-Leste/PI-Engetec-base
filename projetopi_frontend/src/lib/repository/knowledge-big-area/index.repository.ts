
export type KnowledgeBigArea = {
    id?: string 
    activityDescription: string 
    activityName: string 
    eventId?: string 
}

export interface IKnowledgeBigAreaRepository{
    create(KnowledgeBigArea: KnowledgeBigArea): Promise<KnowledgeBigArea>;
    read(): Promise<KnowledgeBigArea[]>;
    readActivity(id: string): Promise<KnowledgeBigArea | null>;
    update(KnowledgeBigArea: KnowledgeBigArea): Promise<KnowledgeBigArea>;
    delete(id: string): Promise<KnowledgeBigArea>;
}