const useState = React.useState;

function App() {
    const [inputText, setInputText] = useState('');

    const app = {
        title: 'Just do it',
        subtitle: 'We help you with your decisions'
    }
    
    const [options, setOptions] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
        
        if(inputText.trim()) {
            setOptions([...options, inputText.trim()]); 
            setInputText('');
        }
    }
    
    function deleteItem(element){
        setOptions(options.filter((x, i) => i != element));
    }
    
    function whatToDo() {
        if(options.length > 0)
            alert(options[Math.floor(Math.random()*options.length)]);
    }

    return (
        <div>
            <h1>{app.title}</h1>
    
            <p>{app.subtitle}</p>
    
            <button disabled={options.length == 0} onClick={whatToDo}>What should I do?</button>
            <button disabled={options.length == 0} onClick={() => setOptions([])}>Clear list</button>
            
            {options.length > 0 && <p>Here are your options:</p>}
            <ul>
                {options.map((x, index) => <li key={index}>{x} <span style={{cursor: 'pointer'}} onClick={() => deleteItem(index)}>X</span></li>)}
            </ul>
            <form onSubmit={submitHandler}>
                <input type='text' name='option' onChange={e => setInputText(e.target.value)} value={inputText}/>
                <button disabled={inputText.trim().length == 0}>Add Option</button>
            </form>
        </div>    
    )
}

ReactDOM.render(<App />, document.querySelector('#app'));