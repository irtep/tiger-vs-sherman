export interface Army {
    name: string;
    description: string;
};

export const armies: Army[] = [
    {
        name: 'Fighting First',
        description: `1st Armoured Division of US Army. Well equipped, but still bit green.`
    },
    {
        name: 'Desert Rats',
        description: `7th Armoured Division of Great Britan. Experienced and well equipped..`
    },
    {
        name: 'Afrika Korps',
        description: `Germanys Afrika Korps is very experienced and well equipped army.`
    },
    {
        name: 'Regio Esercito',
        description: `Corpo d'armata Motocorazzato, the 20th Armoured Corps of Royal Italian Army. Experienced veterans, but inferior tanks.`
    }
];