
export class User {
    userId: number;
    name: string;
    avatarId: number;

    constructor(name: string, avatarId: number) {
        this.name = name;
        this.avatarId = avatarId;
    }
}