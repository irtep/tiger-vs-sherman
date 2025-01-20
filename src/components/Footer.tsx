import React from 'react';

const Footer: React.FC = (): React.ReactElement => {

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage: "linear-gradient(to right, rgb(172, 116, 12), rgb(236, 230, 57), rgb(3, 62, 9)",
            color: "white",
            borderRadius: 2,
            margin: 1,
            padding: 1
        }}>
            <p>
                Version: 0.0.0
            </p>
        </div>
    );
}

export default Footer;