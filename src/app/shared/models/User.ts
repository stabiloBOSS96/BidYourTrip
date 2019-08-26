export interface User {
    id: number;
    name: String;
    surname: String;
    email: String;
    password: String;
}

export interface UserMap {
    records: User[];
}