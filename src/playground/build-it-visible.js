class Visibility extends React.Component {

    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visible: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>{!this.state.visible?'Show details':'Hide Details'}</button>
                {this.state.visible && <p>Hey there!Here are the Details</p>}
            </div>
        );
    }
}


ReactDOM.render(<Visibility />, document.getElementById('app'));





// console.log('Build it is working fine!');


// const app = {
//     isShowing: true
// }

// const toggle = () => {
//     app.isShowing = !app.isShowing;
//     render();
// }

// const appRoot = document.getElementById('app');


// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggle}>{app.isShowing ?'Show details':'Hide details'}</button>
//             <p>{!app.isShowing?'Hey!Here are the details that you asked for.':undefined}</p>
//         </div>
//     );
    
//     ReactDOM.render(template,appRoot);
    
    
// }

// render();