import React, {useState, useEffect} from 'react'

export default function AddOption({addOptionHandler, options}) {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        
        if(inputText.trim()) {
            const error =  addOptionHandler(inputText.trim());
            setError(error);
            
            if (!error)
                setInputText('');
        }
    }

    useEffect(() =>{
        if(options.length == 0 )
            setError('');
    }, [options]);

    return (
        <>
            {error && <p className='add-option-error'>{error}</p> }
            <form onSubmit={submitHandler} className='add-option'>
                <input
                    type='text'
                    name='option'
                    onChange={e => setInputText(e.target.value)}
                    value={inputText}
                    className='add-option__input'
                />
                <button className='button button--animate'
                    disabled={inputText.trim().length == 0}
                >
                    Add Option
                </button>
            </form>
        </>
    )
}