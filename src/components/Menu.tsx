import React, { useContext, useState } from 'react';
import Footer from './Footer';
import { armies, Army } from '../data/armies';
import { TVSContext } from '../context/TVScontext';
import { warButton } from '../styles/styles';

const Menu: React.FC = (): React.ReactElement => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [selectedOption2, setSelectedOption2] = useState<string>('');
    const {
        setView
    } = useContext(TVSContext);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, player: boolean): void => {
        player
            ? setSelectedOption(event.target.value)
            : setSelectedOption2(event.target.value);
    };

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
                        value={selectedOption}
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
                        value={selectedOption2}
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
                                <br/>
                                <button
                                    style={warButton}
                                    onClick={() => { setView('preBattle') }}
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