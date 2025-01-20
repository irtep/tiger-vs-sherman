import React from 'react';
import Footer from './Footer';

const Menu: React.FC = (): React.ReactElement => {

    return (
        <div>
            <div
                style={{    
                    textAlign: 'center',
                    background: 'rgb(216, 197, 22)'
                }}
            >
                <h1>
                    Tiger vs Sherman
                </h1>


            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Menu;