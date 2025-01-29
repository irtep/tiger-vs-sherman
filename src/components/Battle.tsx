import React, { useEffect, useRef, useState } from 'react';
import desertBackground from '../assets/desert1.png';
import { useTVSContext } from '../context/TVScontext';
import { arenaHeight, arenaWidth } from '../data/measures';
import { GameObject } from '../sharedInterfaces/sharedInterfaces';

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

        // Event listeners for keyboard
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === ' ') {
                setPause((prevPause) => {
                    const newPauseState: boolean = !prevPause;
                    pauseRef.current = newPauseState; // Ensure pauseRef is updated
                    console.log('Paused:', newPauseState);
                    if (prevPause) {
                        setMessage('not in pause');
                    } else {
                        setMessage('PAUSED');
                    }
                    return newPauseState;
                });
            }
        };

        // event listeners for keyboard and mouse
        const handleMouseDown = (e: MouseEvent) => {
            const rect: DOMRect = canvas.getBoundingClientRect();
            const mouseX: number = e.clientX - rect.left;
            const mouseY: number = e.clientY - rect.top;
            //const playerRig: Vehicle | undefined = gameObject.vehicles.find(v => v.role === 'player')?.vehicle;
            //const aiRig: Vehicle | undefined = gameObject.vehicles.find(v => v.role === 'ai')?.vehicle;

            // player shooting:
            /*
            if (playerRig && aiRig) {
                //const turretsAngle: number = Math.atan2(mouseY - playerRig.y, mouseX - playerRig.x);
                //
                // Calculate the angle to the mouse position
                const mouseAngle: number = Math.atan2(mouseY - playerRig.y, mouseX - playerRig.x);
                const forwardAngle: number = playerRig.angle;

                // Define the arc range (±π/8 radians for a 45-degree arc)
                const arcRange: number = Math.PI / 8;

                // Normalize angles to [0, 2π] for comparison
                const normalizeAngle = (angle: number) => (angle + Math.PI * 2) % (Math.PI * 2);
                const normalizedMouseAngle = normalizeAngle(mouseAngle);
                const normalizedForwardAngle = normalizeAngle(forwardAngle);

                // Check if the mouse is within the front arc
                const isInFrontArc =
                    Math.abs(normalizedMouseAngle - normalizedForwardAngle) <= arcRange ||
                    Math.abs(normalizedMouseAngle - normalizedForwardAngle - Math.PI * 2) <= arcRange;
                //        
                //console.log('in front: ', isInFrontArc);
                /*
                const checkingRadar: CollisionReport = radarCheck(
                  gameObject,
                  'player',
                  0,
                  'check for front weapons'
                );
                */
            //shoot(playerRig, gameObject, mouseAngle, isInFrontArc/*checkingRadar*/, true);
            //}
            console.log('mouses: ', mouseX, mouseY);
        };

        window.addEventListener('keydown', handleKeyDown);
        canvas.addEventListener('mousedown', handleMouseDown);
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
            window.removeEventListener('keydown', handleKeyDown);
            //window.removeEventListener('keyup', handleKeyUp);
            canvas.removeEventListener('mousedown', handleMouseDown);
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