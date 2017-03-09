import { ContactInfo } from './../models/contact.model';

export class Client {
    name: string;
    clientId: number;
    contactInfo: ContactInfo;
    
    constructor(name: string, contactInfo: ContactInfo) {
        this.name = name;
        this.contactInfo = contactInfo;
    }
}