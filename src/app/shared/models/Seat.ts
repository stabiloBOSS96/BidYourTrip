import { Flight } from './Flight';

export interface Seat {
    Id:number;
    StartPrice:number;
    ActualPrice:number;
    AveragePrice:number;
    Category: string;
}