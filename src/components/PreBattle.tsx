import React, { useEffect } from 'react';
import { useTVSContext } from '../context/TVScontext';
import { warButton } from '../styles/styles';

const PreBattle: React.FC = (): React.ReactElement => {

    const {
        setView
    } = useTVSContext();
    
    // setup teams
    // in further versions, here player can choose his teams
    useEffect( () => {

    },[]);

    return (
        <div
            style={{
                background: 'rgb(170,170,10)',
                color: 'black',
                padding: 5,
                margin: 5,
                borderRadius: 5
            }}
        >
            PreBattle

            <p>
                welcome to the battle!
            </p>
            <button
                style={warButton}
                onClick={ () => {
                    setView('battle');
                }}
            >
                start the battle
            </button>
        </div>
    );
  }

export default PreBattle;