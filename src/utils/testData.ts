import {
    Bike,
} from '../types';


export const response: Bike[] = [
    {
        id: '1',
        company: 'Soma',
        model: 'Doublecross',
        price: '100',
        date: 'Feb 24, 2013',
        description: 'Soma Doublecross frameset carbon fork like new',
        picture: 'https://cdn.bike-discount.de/media/org/orgb_C/orgid_26/thumbs/328964_2936140.jpg',
        Link: 'Link To website',
    },
    {
        id: '2',
        company: 'Soma',
        model: 'Smoothie',
        price: '200',
        date: 'Feb 18, 2013',
        description: '2012 Soma Smoothie Frameset, 52 cm',
        picture: 'https://cdn.bike-discount.de/media/org/orgb_R/orgid_33/thumbs/450554_3853977.jpg',
        Link: 'Link To website',
    },
    {
        id: '3',
        company: 'Soma',
        model: 'DELANCEY',
        price: '300',
        date: 'Jan 25, 2013',
        description: 'SOMA DELANCEY Green Fixie Frame and Fork NEW 54cm x 54cm SoundCycles Los Angeles',
        picture: 'https://cdn.bike-discount.de/media/org/orgb_R/orgid_33/thumbs/486175_4045883.jpg',
        Link: 'Link To website',
    },
];

export const cartInitialState: Bike[] = [];
export const cartFinalState = response.map(elem => ({ ...elem, amount: '1' }));

export const initialAppState = {
    cart: cartInitialState,
};
export const finalAppState = {
    cart: cartFinalState,
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCopy = (obj: any) => JSON.parse(JSON.stringify(obj));
