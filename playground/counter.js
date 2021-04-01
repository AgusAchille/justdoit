const appRoot = document.querySelector('#app');

let count = 0

function counterAdd(num) {
    count += num;
    renderCounter();
}

function counterReset() {
    count = 0;
    renderCounter();
}

function renderCounter(){
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => counterAdd(1)}>+1</button>
            <button onClick={() => counterAdd(-1)}>-1</button>
            <button onClick={counterReset}>reset</button>
        </div>    
    )
    
    ReactDOM.render(template, appRoot)
}

renderCounter();
