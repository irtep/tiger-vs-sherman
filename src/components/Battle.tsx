import React, { useEffect, useRef, useState } from 'react';
import desertBackground from '../assets/desert1.png';
import { useTVSContext } from '../context/TVScontext';
import { arenaHeight, arenaWidth } from '../data/measures';
import { GameObject } from '../sharedInterfaces/sharedInterfaces';
import { handleKeyDown, handleMouseDown } from '../functions/gameControls';

const Battle: React.FC = (): React.ReactElement => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [message, setMessage] = useState<string>('');
    const [pause, setPause] = useState<boolean>(true);
    const pauseRef: React.MutableRefObject<boolean> = useRef<boolean>(pause); // UseRef to store latest pause state
    const {
        //setView,
        gameObject
    } = useTVSContext();

    useEffect(() => {

        /*
        * setup canvas 
        */

        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;

        canvas.width = arenaWidth;
        canvas.height = arenaHeight;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if (!ctx) return;

        /*
        * setup match
        */

        // create copy, that will be updated in game loop
        const liveGameObject: GameObject = JSON.parse(JSON.stringify(gameObject));

        /*
        * event listeners
        */ 
       
        const keyDownHandler = (e: KeyboardEvent) => handleKeyDown(e, setPause, pauseRef, setMessage);
        const mouseDownHandler = (e: MouseEvent) => handleMouseDown(e, canvasRef);

        window.addEventListener('keydown', keyDownHandler);
        canvas.addEventListener('mousedown', mouseDownHandler);
        canvas.addEventListener('mousemove', (e: MouseEvent) => {
            const rect: DOMRect = canvas.getBoundingClientRect();
            gameObject.mouseNowX = e.clientX - rect.left;
            gameObject.mouseNowY = e.clientY - rect.top;
        });

        /* 
        *       update function
        */

        const update = (): void => {
            console.log('update');
            // update movements

            // shoot

            // close combat

            // update bullets

        };

        const loop = (): void => {
            console.log('loop');
            if (!pauseRef.current) {
                console.log('not in pause');
                update();
            }
            requestAnimationFrame(loop);
        };

        console.log('loop should start');
        loop();

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
            //window.removeEventListener('keyup', handleKeyUp);
            canvas.removeEventListener('mousedown', mouseDownHandler);
        };

    }, []);

    return (
        <div
            style={{
                marginLeft: 10
            }}
        >
            <p style={{ color: 'white' }}>
                {message}
            </p>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    border: '1px solid black',
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