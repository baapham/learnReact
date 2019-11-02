let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? "Hide Details" : "Show Detais"}
            </button>
            {visibility && <p>Here are some details</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
}

render();