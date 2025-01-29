import { Team } from "../sharedInterfaces/sharedInterfaces";
/*
    id: string; commander: 'player' | 'ai';
    name: string;
    type: 'infantry' | 'gun' | 'tank';
    def: number;
    speed: number;
    mat: number;
    rat: number;
    skill: number;
    save: number;
    armourFront: number;
    armourSide: number;
    armourTop: number;
    faction: string;
    imgSide: string;
    imgTop: string;
    imgHull: string;
    imgTurret: string;
    effects: string[];
    specials: string[];
    desc: string;
    order: string;
    weapons: string[];
    unit: string;
    transportCapacity: string;
    transportingUnits: string[];
    nickname: string;
    moveTarget: Coordinate;
    targetUnit: string;
    crossSkill: number;
    points: number;
    height: number;
    width: number;
    theaters: string[];
    horsepowers: number;
    weight: number;
*/
export const teams: Team[] = [
    {
        id: 'placeholder',
        commander: 'player',
        name: 'Sherman M4A1',
        type: 'tank',
        def: 10,
        speed: 35,
        mat: 7,
        rat: 6,
        skill: 3,
        save: 7,
        armour: { front: 6, side: 4, top: 1},
        faction: 'Desert Rats',
        img: {side: 'shermanM4A1gpSide', top: 'shermanM4A1gpTop', hull: '', turret: ''},
        effects: [],
        specials: [],
        desc: `Good armour, fine gun. Easy to use. Reliable. More than a match for most Panzers!`,
        order: '',
        weapons: [
            {
                name: '75mm Gun M3',
                range: 70,
                antiTank: 10,
                firePower: 3,
                reloadTime: 200,
                coolDown: 0,
                specials: ['smoke']
            },
            {
                name: `Sherman MG's`,
                range: 50,
                antiTank: 4,
                firePower: 6,
                reloadTime: 50,
                coolDown: 0,
                specials: []
            }
        ],
        unit: '',
        transportCapacity: 2,
        transportingUnits: [],
        nickname: 'Sherman',
        moveTarget: {x: 0, y: 0},
        targetUnit: '',
        crossSkill: 3,
        points: 9,
        height: 262,
        width: 584,
        theaters: ['North Africa'],
        horsepowers: 400,
        weight: 30000
    }
];