export class User {
    email: string;
    password: string;
    name: string;
    _id: string;
    token?: string;
}

export interface Credentials {
    email: string;  
    password: string;
}