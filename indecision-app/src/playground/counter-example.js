class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const num = parseInt(localStorage.getItem("num"), 10);
        if (!isNaN(num)) {
            this.setState(() => ({ count: num }));
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const num = this.state.count;
            localStorage.setItem("num", num);
        }

    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById("app"));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCountApp();
// }
// const minusOne = () => {
//     count--;
//     renderCountApp();
// }
// const reset = () => {
//     count = 0;
// renderCountApp();
// }


// const appRoot = document.getElementById('app');



// const renderCountApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick ={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>  
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCountApp();