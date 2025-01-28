import React, { useState } from 'react';
import Footer from './Footer';
import { armies } from '../data/armies';
import { useTVSContext } from '../context/TVScontext';
import { warButton } from '../styles/styles';
import { Army } from '../sharedInterfaces/sharedInterfaces';

const Menu: React.FC = (): React.ReactElement => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [selectedOption2, setSelectedOption2] = useState<string>('');
    const {
        setView,
        gameObject,
        setGameObject
    } = useTVSContext();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, player: boolean): void => {
        const selectedArmy: Army | undefined = armies.find((a: Army) => event.target.value === a.name);

        if (selectedArmy) {
            player
                ? setGameObject({
                    ...gameObject,
                    playersArmy: selectedArmy
                })
                : setGameObject({
                    ...gameObject,
                    opponentsArmy: selectedArmy
                });
        };
    };
    /*
        useEffect( () => {
            setGameObject({
                ...gameObject,
                playersArmy: [] 
            });
        }, [selectedOption, selectedOption2]);
    */
    return (
        <div>
            <div
                style={{
                    textAlign: 'center',
                    backgroundImage: "linear-gradient(to right, rgb(172, 116, 12), rgb(236, 230, 57), rgb(172, 116, 12)",
                }}
            >
                <h1>
                    Tiger vs Sherman
                </h1>

                <div>

                    <label htmlFor="selectYourTeam">Choose your team: </label>
                    <select
                        id="selectYourTeam"
                        value={gameObject.playersArmy.name}
                        onChange={(e) => {
                            handleChange(e, true);
                        }}>
                        <option value="" disabled>
                            Select an option
                        </option>
                        {armies.map((option: Army) => (
                            <option key={`ownArmy ${option.name}`} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                    </select>

                    <br />

                    <label htmlFor="selectOpponentTeam">Choose an opponent: </label>
                    <select
                        id="selectOpponentTeam"
                        value={gameObject.opponentsArmy.name}
                        onChange={(e) => {
                            handleChange(e, false);
                        }}>
                        <option value="" disabled>
                            Select an option
                        </option>
                        {armies.map((option: Army) => (
                            <option key={`opponentArmy ${option.name}`} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                    </select>

                    {
                        (selectedOption !== '' && selectedOption2 !== '')
                            ? <>
                                <br />
                                <button
                                    style={warButton}
                                    onClick={() => {
                                        setView('preBattle');
                                        console.log('clicked to preBattle');
                                    }}
                                >Go to war</button>
                            </>
                            : <p>select armies for you and your opponent, to play.</p>
                    }

                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Menu;