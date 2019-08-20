import { Seat } from './Seat';

export interface Flight {
    Id: number;
    From: string;
    To: String;
    ExpirationTime: Date;
    Departure: Date;
    Arrival: Date;
    Seats: Seat[];
}