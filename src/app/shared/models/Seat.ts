import { Flight } from './Flight';

export interface Seat {
    Id:number;
    Number: String;
    StartPrice:number;
    ActualPrice:number;
    AveragePrice:number;
    Category: string;
}