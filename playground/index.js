function App(){
    const [name, setName] = React.useState('Agus');
    const renderCount= React.useRef(1);
    const [lista, setLista] = React.useState([]);


    React.useEffect(() => {
        renderCount.current++

        setLista(prev =>{
            console.log(prev.length, lista.length);
            return lista
        })
    })

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={() => setLista([...lista, name])}>
                add
            </button>
            <ul>
                {lista.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));