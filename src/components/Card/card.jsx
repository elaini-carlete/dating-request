import React, { useState } from 'react';
import './style.css'

export const DatingRequestCard = ({color, backgroundColor}) => {
    const [showAlert, setShowAlert] = useState(false);

    const style = {
        color: '#d87093',
        opacity: '0.7'
    }

    const alertButtonYes = () => {
        setShowAlert(true);
    }

    const mouseOver = () => {
        const no = document.getElementById('no');
        const noX = Math.random() * window.innerWidth;
        const noY = Math.random() * window.innerHeight;

        no.style.left = noX + 'px';
        no.style.top = noY + 'px';

        mouseOverToMove(); 
        clickYes();
    }

    let state = -1;

    function mouseOverToMove () {
        state++;
        const no = document.getElementById('no');

        if (state === 0) {
            no.style.transform = 'translate(50%)';
        } else if (state === 1) {
            no.style.transform = 'translate(130px, -150px)';
        } else if (state === 2) {
            no.style.transform = 'translate(130px, 150px)';
        } else if (state === 3) {
            no.style.transform = 'translate(-325px, 150px)';
        } else if (state === 4) {
            no.style.transform = 'translate(-325px, -150px)';
        } else if (state === 5) {
            no.style.transform = 'translate(135px, 150px)';
        } else if (state === 6) {
            no.style.transform = 'translate(135px, -150px)';
        } else if (state === 7) {
            no.style.transform = 'translate(-325px, 150px)';
        } else if (state === 8) {
            no.style.transform = 'translate(-325px, -150px)';
            state = -1;
        }
    }

    const clickYes = () => {
        const yes = window.document.getElementById('yes');
        const no = window.document.getElementById('no');

        yes.style.transform = 'translate(0px)';
            
        setTimeout(() => {
            no.style.transform = 'translate(0px, 0px)';
        }, 1000);
    }

    return(
        <div className='dating-request-card'>
            <h1 className='question-title' style={style}>Wants to date me ?</h1>
            <button className='reply-btn' id='yes' style={style} onClick={alertButtonYes}>Yes,I love you!</button>
            <button className='reply-btn' id='no' style={style} onMouseOver={mouseOver}>No,I Hate you!</button>

            {showAlert && (
                <div className='card-yes'>
                    <p style={style}>I knew, my favorite little person!</p>
                </div>
            )}
        </div>
    );
}