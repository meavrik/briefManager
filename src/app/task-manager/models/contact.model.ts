export class ContactInfo {

    country: string;
    city: string;
    address: string;

    phones: string[];
    contactName: string;

    constructor(country: string, city: string, address: string) {
        this.country = country;
        this.city = city;
        this.address = address;
    }
}