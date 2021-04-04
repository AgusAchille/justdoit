import React from 'react'

export default function Header({ title, subtitle }) {
    return (
        <header className='header'>
            <div className='container'>
                <h1 className='header__title'>{title}</h1>
                <h2 className='header__subtitle'>{subtitle}</h2>
            </div>
        </header>
    )
}