import React from 'react';

export const Ball =
    () => {
        let offsetX, offsetY
        const move = e => {
            const el = e.target
            el.style.left = `${e.pageX - offsetX}px`
            el.style.top = `${e.pageY - offsetY}px`
        }
        const add = e => {
            const el = e.target
            offsetX = e.clientX - el.getBoundingClientRect().left
            offsetY = e.clientY - el.getBoundingClientRect().top
            el.addEventListener('mousemove', move)
        }
        const remove = e => {
            const el = e.target
            el.removeEventListener('mousemove', move)
        }

        const divStyle = {
            width: '150px',
            height: '150px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            cursor: 'pointer'
        }

        const imgStyle = {
            position: 'fixed',
            width: '150px',
            height: '150px',

        }
        return (
            <div style={divStyle} onMouseDown={add} onMouseUp={remove}><img style={imgStyle} id="img" src="" draggable="false" alt="" ></img></div>
        )


    }
export default Ball;
