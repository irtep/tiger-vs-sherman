export interface Team {
    commander: 'player' | 'ai';
    name: string;
    type: 'infantry' | 'gun' | 'tank';
    stats: any;
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