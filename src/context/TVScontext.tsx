import { createContext, useState, ReactNode, FC, ReactElement } from "react";

interface TVSContextType {
    view: 'menu' | 'battle' | 'preBattle' | 'afterBattle';
    setView: React.Dispatch<React.SetStateAction<'menu' | 'battle' | 'preBattle' | 'afterBattle'>>;
}

interface Props {
    children: ReactNode;
}

const defaultContextValue: TVSContextType = {
    view: 'menu',
    setView: () => {}, // Provide a no-op function as a placeholder
};

export const TVSContext = createContext<TVSContextType>(defaultContextValue);

export const TVSProvider: FC<Props> = ({ children }: Props): ReactElement => {
    const [view, setView] = useState<'menu' | 'battle' | 'preBattle' | 'afterBattle'>('menu');

    return (
        <TVSContext.Provider value={{ view, setView }}>
            {children}
        </TVSContext.Provider>
    );
};
