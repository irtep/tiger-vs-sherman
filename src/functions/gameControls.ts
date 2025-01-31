export const handleKeyDown = (
    e: KeyboardEvent,
    setPause: React.Dispatch<React.SetStateAction<boolean>>,
    pauseRef: React.MutableRefObject<boolean>,
    setMessage: React.Dispatch<React.SetStateAction<string>>
) => {
    if (e.key === ' ') {
        setPause((prevPause) => {
            const newPauseState = !prevPause;
            pauseRef.current = newPauseState; // Ensure pauseRef is updated
            console.log('Paused:', newPauseState);
            setMessage(newPauseState ? 'PAUSED' : 'not in pause');
            return newPauseState;
        });
    }
};

export const handleMouseDown = (
    e: MouseEvent,
    canvasRef: React.RefObject<HTMLCanvasElement>) => {

    const canvas = canvasRef.current;
    if (!canvas) return;
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