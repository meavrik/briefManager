export class Project {

    index: number;
    projectId: number;
    projectNumber: number;
    title: string;
    description: string;
    created: number;
    open: boolean;
    status: number;
    client: any;

    constructor(title: string, projectNumber: number, client: string) {
        this.title = title;
        this.client = client;
        this.created = new Date().getTime();
        this.open = true;
        this.projectNumber = projectNumber;
        this.status = 1;
    }
}