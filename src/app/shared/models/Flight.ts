import { Seat } from './Seat';

export interface Flight {
    Id: number;
    From: string;
    To: String;
    Seats:Seat[]
}