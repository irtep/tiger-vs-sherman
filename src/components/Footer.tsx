import React from 'react';
import dakLogo from '../assets/DAK.png';
import dRlogo from '../assets/desertRats.png';
import USlogo from '../assets/fightingFirst.png';
import italyLogo from '../assets/italy.png';
import huntingTiger from '../assets/tiger_hunting.png';
import huntingSherman from '../assets/Shermans_hunting.png';

const Footer: React.FC = (): React.ReactElement => {

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage: "linear-gradient(to right, rgb(172, 116, 12), rgb(236, 230, 57), rgb(172, 116, 12)",
            color: "white",
            borderRadius: 2,
            margin: 1,
            padding: 1
        }}>
            <div style={{ textAlign: 'center' }}>
                <img src={huntingSherman} alt="sherman tanks" height={100} style={{margin: 5}}/>
                <img src={dRlogo} alt="desert rats logo" height={100} style={{margin: 5}}/>
                <img src={USlogo} alt="us army logo" height={100} style={{margin: 5}}/>
                <img src={dakLogo} alt="afrika korps" height={100} style={{margin: 5}}/>
                <img src={italyLogo} alt="italy logo" height={100} style={{margin: 5}}/>
                <img src={huntingTiger} alt="tiger tank" height={100} style={{margin: 5}}/>
            </div>
            <p>
                Version: 0.0.1
            </p>
        </div>
    );
}

export default Footer;