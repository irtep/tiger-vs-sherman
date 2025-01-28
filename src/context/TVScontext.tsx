import { createContext, useState, ReactNode, FC, ReactElement, useContext } from 'react';
import { GameObject } from '../sharedInterfaces/sharedInterfaces';


interface TVSContextType {
    view: 'menu' | 'battle' | 'preBattle' | 'afterBattle';
    setView: React.Dispatch<React.SetStateAction<'menu' | 'battle' | 'preBattle' | 'afterBattle'>>;
    gameObject: GameObject;
    setGameObject: React.Dispatch<React.SetStateAction<GameObject>>;
};

export const TVSContext = createContext<TVSContextType | undefined>(undefined);

interface Props {
    children: ReactNode;
};

export const TVSProvider: FC<Props> = ({ children }): ReactElement => {
    const [view, setView] = useState<'menu' | 'battle' | 'preBattle' | 'afterBattle'>('menu');
    const [gameObject, setGameObject] = useState<GameObject>({
            theater: 'north africa',
            map: [],
            playersArmy: {
                name: '',
                description: '',
                teams: []
            },
            opponentsArmy: {
                name: '',
                description: '',
                teams: []
            },
            hits: [],
            bullets: [],
            updateCounter: 0,
            mouseNowX: 0,
            mouseNowY: 0
    });

    return (
        <TVSContext.Provider value={{ 
            view, setView,
            gameObject, setGameObject 
            }}>
            {children}
        </TVSContext.Provider>
    );
};

export const useTVSContext = (): TVSContextType => {
    const context = useContext(TVSContext);

    if (!context) {
        throw new Error('useTVSContext must be used within a TVSProvider');
    }

    return context;
};
