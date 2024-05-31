
export type createFile = {
    id?: string 
    FileDescription: string 
    FileName: string 
    eventId?: string 
}

export interface IcreateFile{
    create(createFile: createFile): Promise<createFile>;
    read(): Promise<createFile[]>;
    readFile(id: string): Promise<createFile | null>;
    update(createFile: createFile): Promise<createFile>;
    delete(id: string): Promise<createFile>;
}