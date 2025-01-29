export interface Coordinate {
    x: number;
    y: number;
};

export interface Weapon {
    name: string;
    range: number;
    antiTank: number;
    firePower: number;
    reloadTime: number;
    coolDown: number;
    specials: string[];
};

export interface Team {
    id: string;
    commander: 'player' | 'ai';
    name: string;
    type: 'infantry' | 'gun' | 'tank';
    def: number;
    speed: number;
    mat: number;
    rat: number;
    skill: number;
    save: number;
    armour: {front: number, side: number, top: number};
    faction: string;
    img: {side: string, top: string, hull: string, turret: string};
    effects: string[];
    specials: string[];
    desc: string;
    order: string;
    weapons: Weapon[];
    unit: string;
    transportCapacity: number;
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
};

export interface Obstacle {
    img: string; // use png's
    x: number;
    y: number;
    angle: number;
    width: number;
    height: number;
};

export interface Hit {
    x: number;
    y: number;
    damage: number;
};

export interface Bullet {
    x: number;
    y: number;
    angle: number;
    owner: 'player' | 'ai';
    color: string;
    damage: number;
    size: number;
    specials?: string[];
    speed: number;
};

export interface GameObject {
    theater: string;
    map: Obstacle[];
    playersArmy: Army;
    opponentsArmy: Army;
    hits: Hit[];
    bullets: Bullet[];
    updateCounter: number;
    mouseNowX: number;
    mouseNowY: number;
};

export interface Army {
    name: string;
    description: string;
    teams: Team[];
};