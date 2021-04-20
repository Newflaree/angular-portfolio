export interface ServiceResponse {
    ok:       boolean;
    total:    number;
    services: Service[];
}

export interface Service {
    title: string;
    desc:  string;
    icon:  string;
    user:  User;
}

export interface User {
    _id:  string;
    name: string;
}

