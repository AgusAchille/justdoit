"use strict";

const useState = React.useState;

function App() {
  const [inputText, setInputText] = useState('');
  const app = {
    title: 'Just do it',
    subtitle: 'We help you with your decisions'
  };
  const [options, setOptions] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    if (inputText.trim()) {
      setOptions([...options, inputText.trim()]);
      setInputText('');
    }
  }

  function deleteItem(element) {
    setOptions(options.filter((x, i) => i != element));
  }

  function whatToDo() {
    if (options.length > 0) alert(options[Math.floor(Math.random() * options.length)]);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("button", {
    disabled: options.length == 0,
    onClick: whatToDo
  }, "What should I do?"), /*#__PURE__*/React.createElement("button", {
    disabled: options.length == 0,
    onClick: () => setOptions([])
  }, "Clear list"), options.length > 0 && /*#__PURE__*/React.createElement("p", null, "Here are your options:"), /*#__PURE__*/React.createElement("ul", null, options.map((x, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, x, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: () => deleteItem(index)
  }, "X")))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option",
    onChange: e => setInputText(e.target.value),
    value: inputText
  }), /*#__PURE__*/React.createElement("button", {
    disabled: inputText.trim().length == 0
  }, "Add Option")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));