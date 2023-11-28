import React from "react";

interface WinProps {
    blackTime: number;
    whiteTime: number;
    restart: () => void;
}
export default function Win({restart, blackTime, whiteTime}: WinProps) {
    return(
        <div className="win">
            <div className="win__info">
                <h2 className="win__header">Выйграли {blackTime < 1 ? 'Белые' : 'Чёрные'}</h2>
                <button className="btn win__btn" onClick={restart}>Играть снова</button>
            </div>
        </div>
    )
}