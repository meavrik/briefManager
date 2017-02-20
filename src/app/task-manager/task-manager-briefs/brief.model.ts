export class Brief {
    index: number;
    project:string;
    catalogId:number;
    title: string;
    description: string;
    status: number;
    created: number;
    due: number;
    formats: string[];
    assignto: string;
    priority: number;
    open: boolean;
    category: string;
    client: any;

    constructor(    index: number, 
                    title: string, 
                    description: string = "",
                    project:string = "",
                    assignto:string = "",
                    formats:string[]=[],
                    client:string="",due:number=0) {
        this.description = description;
        this.index = index;
        this.title = title;
        this.status = 0;
        this.created = new Date().getTime();
        this.priority = 1;
        this.open = true;
        this.project=project;
        this.assignto=assignto;
        this.due=due;
        this.formats=formats;
        this.client=client;
    }
}