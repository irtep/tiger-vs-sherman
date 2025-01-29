    import React, { useEffect, useRef, useState } from 'react';
    import desertBackground from '../assets/desert1.png';
import { arenaHeight, arenaWidth } from '../data/measures';

    const Battle: React.FC = (): React.ReactElement => {
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const [message, setMessage] = useState<string>('');
        
        useEffect( () => {
            // setup canvas
            const canvas = canvasRef.current;
            if (!canvas) return;
        
            canvas.width = arenaWidth;
            canvas.height = arenaHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
        }, []);

        return (
            <div
                style={{
                    marginLeft: 10
                }}
            >
                {message} <br/>
                <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    border: '1px solid black',
                    //background: '#9A7B4D',
                    backgroundImage: `url(${desertBackground})`,
                    backgroundSize: 'cover', // Or 'contain', '100% 100%' for specific sizing
                    backgroundRepeat: 'no-repeat', // Avoid tiling the image
                    marginLeft: 0,
                    marginRight: 0,
                }}
                />
            </div>
        );
    }

    export default Battle;