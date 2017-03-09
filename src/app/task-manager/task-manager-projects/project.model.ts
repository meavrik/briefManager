export class Project {

    index: number;
    projectId: number;
    projectNumber: number;
    name: string;
    description: string;
    created: number;
    open: boolean;
    status: number;
    client: any;

    constructor(name: string, projectNumber: number, client: string) {
        this.name = name;
        this.client = client;
        this.created = new Date().getTime();
        this.open = true;
        this.projectNumber = projectNumber;
        this.status = 1;
    }
}