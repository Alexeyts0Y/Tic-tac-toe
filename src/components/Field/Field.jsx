import React, { useState } from 'react';
import classes from './FIeld.module.css'
import Cell from '../Cell/Cell';

const cross = '/img/cross.png'
const circle = '/img/circle.png'
const empty = '/img/empty.png'

const Field = () => {
    const [activeStates, setActive] = useState({
        isActive1: false, 
        isActive2: false, 
        isActive3: false, 
        isActive4: false, 
        isActive5: false, 
        isActive6: false, 
        isActive7: false, 
        isActive8: false, 
        isActive9: false 
    })

    const [isPlaceCircleStates, setPlaceCircle] = useState({
        isPlaceCircle1: false, 
        isPlaceCircle2: false, 
        isPlaceCircle3: false, 
        isPlaceCircle4: false, 
        isPlaceCircle5: false, 
        isPlaceCircle6: false,
        isPlaceCircle7: false,
        isPlaceCircle8: false,
        isPlaceCircle9: false
    })

    const [is2ndPlayer, set2ndPlayer] = useState(true)

    function setFigure(key) {
        setActive(prevState => ({
            ...prevState,
            [`isActive${key}`]: true
        }));

        setPlaceCircle(prevState => ({
            ...prevState,
            [`isPlaceCircle${key}`]: !is2ndPlayer
        }));

        set2ndPlayer(!is2ndPlayer)
    }

    function reset() {
        setActive((active) => {
            return Object.keys(active).reduce((obj, key) => {
              obj[key] = false;
              return obj;
            }, {});
        });
        set2ndPlayer(true)
    }

    return (
        <div className={classes.div}>
            <div className={classes.field}>
                <Cell src={activeStates.isActive1 ? (isPlaceCircleStates.isPlaceCircle1 ? circle : cross) : empty} onClick={() =>setFigure(1)}/>
                <Cell src={activeStates.isActive2 ? (isPlaceCircleStates.isPlaceCircle2 ? circle : cross) : empty} onClick={() => setFigure(2)}/>
                <Cell src={activeStates.isActive3 ? (isPlaceCircleStates.isPlaceCircle3 ? circle : cross) : empty} onClick={() => setFigure(3)}/>
                <Cell src={activeStates.isActive4 ? (isPlaceCircleStates.isPlaceCircle4 ? circle : cross) : empty} onClick={() => setFigure(4)}/>
                <Cell src={activeStates.isActive5 ? (isPlaceCircleStates.isPlaceCircle5 ? circle : cross) : empty} onClick={() => setFigure(5)}/>
                <Cell src={activeStates.isActive6 ? (isPlaceCircleStates.isPlaceCircle6 ? circle : cross) : empty} onClick={() => setFigure(6)}/>
                <Cell src={activeStates.isActive7 ? (isPlaceCircleStates.isPlaceCircle7 ? circle : cross) : empty} onClick={() => setFigure(7)}/>
                <Cell src={activeStates.isActive8 ? (isPlaceCircleStates.isPlaceCircle8 ? circle : cross) : empty} onClick={() => setFigure(8)}/>
                <Cell src={activeStates.isActive9 ? (isPlaceCircleStates.isPlaceCircle9 ? circle : cross) : empty} onClick={() => setFigure(9)}/>
            </div>
            <Cell src="/img/reset.png" onClick={reset}/>
        </div>
    );
};

export default Field;