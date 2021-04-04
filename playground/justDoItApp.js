const useState = React.useState;

function Header({ title, subtitle }) {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

function Action({ options }) {
    function whatToDo() {
        if(options.length > 0)
            alert(options[Math.floor(Math.random()*options.length)]);
    }

    return (
        <>
            <button
                 disabled={options.length == 0}
                 onClick={whatToDo}
            >
                What should I do?
            </button>
        </>
    )
}

function Options({ options = [], clearListHandler, deleteOptionHandler }) {
    return (
        <>
            {options.length > 0 && <p>Here are your options:</p>}
            <ul>
                {options.map((x, index) =>
                    <li key={index}>
                        {x} <button onClick={() => deleteOptionHandler(index)}>remove</button>
                    </li>)
                }
            </ul>
            <button
                //disabled={options.length == 0}
                onClick={clearListHandler}
            >
                Clear list
            </button>
        </>
    )
}

function AddOption({addOptionHandler, options}) {
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

    React.useEffect(() =>{
        if(options.length == 0 )
            setError('');
    }, [options]);

    return (
        <>
            {error && <p style={{color: 'red'}}>{error}</p> }
            <form onSubmit={submitHandler} style={{'marginTop': '20px'}}>
                <input
                    type='text'
                    name='option'
                    onChange={e => setInputText(e.target.value)}
                    value={inputText}
                />
                <button
                    disabled={inputText.trim().length == 0}
                >
                    Add Option
                </button>
            </form>
        </>
    )
}

function App() {
    const [options, setOptions] = useState(() => {
        try { return JSON.parse(localStorage.getItem('options')) || []}
        catch (e) {return []}
    });
    const prevOptions = React.useRef(options);

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
    
    React.useEffect(() => {
        if(prevOptions.current.length !== options.length) {
            localStorage.setItem('options', JSON.stringify(options))
            console.log('options saved')            
        }
        
        prevOptions.current = options;
    })

    return (
        <>
            <Header title={title} subtitle={subtitle}/>
            <Action options={options}/>
            <Options options={options} clearListHandler={clearListHandler} deleteOptionHandler={deleteOptionHandler}/>
            <AddOption addOptionHandler={addOptionHandler} options={options}/>
        </>    
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));