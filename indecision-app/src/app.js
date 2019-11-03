class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer!";
        const options = ["Thing one", "Thing two", "Thing Four"];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        console.log("here")
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>
                    What Should I Do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll() {
        console.log("Remove")
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            console.log("Added")
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button >Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById("app"));