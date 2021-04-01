let inputText = ''

const app = {
    title: 'Just do it',
    subtitle: 'We help you with your decisions',
    options: []
}

function submitHandler(e) {
    e.preventDefault();
    
    if(inputText) {
        app.options.push(inputText);
        inputText = '';
        renderApp();
    }
}

function renderApp() {
    const template = (
        <div>
            <h1>{app.title}</h1>
    
            <p>{app.subtitle}</p>

            <button disabled={app.options.length == 0} onClick={whatToDo}>What should I do?</button>
            <button disabled={app.options.length == 0} onClick={clearList}>Clear list</button>
            
            {app.options.length > 0 && <p>Here are your options:</p>}
            <ul>
                {app.options.map((x, i) => <li key={i}>{x} <span style={{cursor: 'pointer'}} onClick={() => deleteItem(i)}>X</span></li>)}
            </ul>
            <form onSubmit={submitHandler}>
                <input type='text' name='option' onChange={inputHandler} value={inputText}/>
                <button disabled={inputText.trim().length == 0}>Add Option</button>
            </form>
    
        </div>    
    )
    
    ReactDOM.render(template, document.querySelector('#app'));
}

function deleteItem(element){
    app.options = app.options.filter((x, i) => i!=element);
    renderApp();
}

function clearList() {
    app.options = [];
    renderApp();
}

function inputHandler(e) {
    inputText = e.target.value;
    renderApp();
}

function whatToDo() {
    if(app.options.length > 0)
        alert(app.options[Math.floor(Math.random()*app.options.length)]);
}

renderApp();