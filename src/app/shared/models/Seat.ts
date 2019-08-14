import { Flight } from './Flight';

export interface Seat {
    Id:number;
    Flight: Flight;
    StartPrice:number;
    ActualPrice:number;
    AveragePrice:number;
}