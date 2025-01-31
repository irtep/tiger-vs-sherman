import { Team } from "../sharedInterfaces/sharedInterfaces";

export const teams: Team[] = [
    {
        id: 'placeholder', commander: 'player', name: 'Sherman M4A1', type: 'tank',
        def: 10,
        speed: 35,
        mat: 7,
        rat: 6,
        skill: 3,
        save: 7,
        armour: { front: 6, side: 4, top: 1},
        faction: 'Desert Rats', img: {side: 'shermanM4A1gpSide', top: 'shermanM4A1gpTop', hull: '', turret: ''},
        effects: [],
        specials: [],
        desc: `Good armour, fine gun. Easy to use. Reliable. More than a match for most Panzers!`,
        order: '',
        weapons: [
            {
                name: '75mm Gun M3', range: 70, antiTank: 10, firePower: 3, reloadTime: 200, coolDown: 0,
                specials: ['smoke'], turret: true
            },
            {
                name: `Sherman MG's`, range: 50, antiTank: 4, firePower: 6, reloadTime: 50, coolDown: 0,
                specials: [], turret: true
            }
        ],
        unit: '', transportCapacity: 2, transportingUnits: [], nickname: 'Sherman', moveTarget: {x: 0, y: 0},
        targetUnit: '', crossSkill: 3, points: 9, height: 262, width: 584, theaters: ['North Africa'],
        horsepowers: 400, weight: 30000
    },
    {
        id: 'placeholder', commander: 'player', name: 'Panzer IV Ausf. D', type: 'tank',
        def: 10,
        speed: 40,
        mat: 7,
        rat: 6,
        skill: 3,
        save: 7,
        armour: { front: 5, side: 3, top: 1},
        faction: 'Afrika Korps', img: {side: 'panzer3shortSide', top: 'panzer4shortTop', hull: '', turret: ''},
        effects: [],
        specials: [],
        desc: `Artillery support tank, but good enough anti-tank vehicle too.`,
        order: '',
        weapons: [
            {
                name: '7,5 KwK37 L/24', range: 60, antiTank: 7, firePower: 3, reloadTime: 200, coolDown: 0,
                specials: ['smoke, artillery'], turret: true
            },
            {
                name: `PZ4 MG's`, range: 40, antiTank: 2, firePower: 6, reloadTime: 50, coolDown: 0,
                specials: [], turret: true
            }
        ],
        unit: '', transportCapacity: 2, transportingUnits: [], nickname: 'Panzer IV', moveTarget: {x: 0, y: 0},
        targetUnit: '', crossSkill: 3, points: 9, height: 284, width: 592, theaters: ['North Africa'],
        horsepowers: 300, weight: 22300
    }
];