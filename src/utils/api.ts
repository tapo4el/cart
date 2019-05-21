import { Bike } from '../types';

export interface BikesAPI {
    (): Promise<Bike[]>;
}

export default async function getBikes(): Promise<Bike[]> {
    const response = await fetch('/data', { method: 'GET' });
    return response.json();
}
