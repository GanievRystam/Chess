import React, {FC, useState, useRef, useEffect} from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer])

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000)
    }
    const handleRestart = () => {
        setBlackTime(300);
        setWhiteTime(300);
        restart();
    }
    function decrementBlackTimer() {
        setBlackTime(prev => prev -1)
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }
    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart game</button>
            </div>
        </div>
    )
}

export default Timer;