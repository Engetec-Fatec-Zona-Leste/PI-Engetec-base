
export type createActivity = {
    id?: string 
    activityDescription: string 
    activityName: string 
    eventId?: string 
}

export interface IcreateActivity{
    create(createActivity: createActivity): Promise<createActivity>;
    read(): Promise<createActivity[]>;
    readActivity(id: string): Promise<createActivity | null>;
    update(createActivity: createActivity): Promise<createActivity>;
    delete(id: string): Promise<createActivity>;
}