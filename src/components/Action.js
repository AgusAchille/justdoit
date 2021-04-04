import React from 'react'

export default function Action({ options, selectOptionHandler }) {
    function whatToDo() {
        if(options.length > 0)
            selectOptionHandler(options[Math.floor(Math.random()*options.length)]);
    }

    return (
        <>
            <button className='big-button'
                 disabled={options.length == 0}
                 onClick={whatToDo}
            >
                What should I do?
            </button>
        </>
    )
}