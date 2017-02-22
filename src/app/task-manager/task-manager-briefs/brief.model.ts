export class Brief {
    index: number;
    project: string;
    catalogId: number;
    title: string;
    description: string;
    status: number;
    created: number;
    due: number;
    formats: string[];
    assignto: number;
    priority: number;
    open: boolean;
    category: string;
    client: any;

    constructor(
        title: string,
        description: string = "",
        project: string = "",
        assignto: number = 0,
        formats: string[] = [],
        client: string = "", 
        due: number = 0) {

        this.title = title;
        this.description = description;
        this.status = 0;
        this.created = new Date().getTime();
        this.priority = 1;
        this.open = true;
        this.project = project;
        this.assignto = assignto;
        this.due = due;
        this.formats = formats;
        this.client = client;
    }
}