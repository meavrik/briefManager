export class Brief {
    index: number;
    title: string;
    description: string;
    status: number;
    created: number;
    due: number;
    formats: any[];
    assignto: string;
    priority: number;
    open: boolean;
    category: string;
    client: any;

    constructor(index: number, title: string, description: string = "") {
        this.description = description;
        this.index = index;
        this.title = title;
        this.status = 0;
        this.created = new Date().getTime();
        this.priority = 1;
        this.open = true;

    }
}