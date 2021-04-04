import React from 'react'

export default function Options({ options = [], clearListHandler, deleteOptionHandler }) {
    const removeButton = (index) =>
        <button
            className='button button--link delete-button'
            onClick={() => deleteOptionHandler(index)}
        >
            <i className="fas fa-trash-alt"></i>
        </button>

    return (
        <>
            <div className="widget-header">
                <h3 className='widget-header__title'>Here are your options:</h3>
                <button
                    disabled={options.length == 0}
                    onClick={clearListHandler}
                    className='button button--link'
                >
                    Clear list
                </button>
            </div>
            {options.length === 0 && <p className='widget__message'>Please add and option to get started!</p>}
            <ul>
                {options.map((x, index) =>
                    <li key={index} className='option'>
                        <span className='option__text'>{x}</span> {removeButton(index)}
                    </li>)
                }
            </ul>
        </>
    )
}