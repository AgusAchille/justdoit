import React, { useState, useEffect } from 'react'
import Action from './components/Action'
import Options from './components/Options'
import AddOption from './components/AddOption'
import Header from './components/Header'
import OptionModal from './components/OptionModal'

export default function App() {
    const [options, setOptions] = useState(() => {
        try { return JSON.parse(localStorage.getItem('options')) || []}
        catch (e) {return []}
    });

    const [option, setOption] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const title = 'Just do it';
    const subtitle = 'We help you with your decisions';

    function clearListHandler() {
        setOptions([]);
    }

    function addOptionHandler(option) {
        if(options.includes(option))
            return `"${option}" is already in the options.`

        setOptions([...options, option]);
    }
    
    function deleteOptionHandler(optionIndex){
        setOptions(options.filter((x, i) => i != optionIndex));
    }
    
    function selectOptionHandler(x) {
        setOption(x);
        setModalOpen(true);
    }

    function clearOptionHandler() {
        setModalOpen(false);
        setTimeout(() => setOption(''), 200);
    }

    useEffect(() => {
        localStorage.setItem('options', JSON.stringify(options))
        console.log('options saved')            

    }, [options.length])

    return (
        <>
            <Header title={title} subtitle={subtitle}/>
            <div className='container'>
                <Action options={options} selectOptionHandler={selectOptionHandler}/>
                <div className="widget">
                    <Options options={options} clearListHandler={clearListHandler} deleteOptionHandler={deleteOptionHandler}/>
                    <AddOption addOptionHandler={addOptionHandler} options={options}/>
                </div>
                <OptionModal option={option} open={modalOpen} clearOptionHandler={clearOptionHandler}></OptionModal>
            </div>
        </>    
    )
}