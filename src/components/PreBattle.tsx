import React, { useEffect } from 'react';
import { useTVSContext } from '../context/TVScontext';
import { warButton } from '../styles/styles';
import { teams } from '../data/teams';
import { Team } from '../sharedInterfaces/sharedInterfaces';

const PreBattle: React.FC = (): React.ReactElement => {

    const {
        setView,
        gameObject,
        setGameObject
    } = useTVSContext();

    // setup teams
    // i just fill them with something now
    // later player can choose own and maybe opponents team too
    useEffect(() => {
        console.log('go at preBattle: ', gameObject);

        const shermanTeam = teams.find((t: Team) => t.name === 'Sherman M4A1');
        const pz4Team = teams.find((t: Team) => t.name === 'Panzer IV Ausf. D');

        setGameObject({
            ...gameObject,
            playersArmy: {
                ...gameObject.playersArmy,
                teams: shermanTeam ? [shermanTeam, shermanTeam] : []
            },
            opponentsArmy: {
                ...gameObject.opponentsArmy,
                teams: pz4Team ? [pz4Team, pz4Team] : []
            }
        });

    }, []);

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
                onClick={() => {
                    setView('battle');
                }}
            >
                start the battle
            </button>
        </div>
    );
}

export default PreBattle;