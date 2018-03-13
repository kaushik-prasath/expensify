console.log("The app is working fine!");

//JSX - Javascript XML

const app = {
    title: 'Indecision APP',
    subTitle: 'Life at the hands of Computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();        
    }

}


const removeAll = () => {
    app.options = [];
    renderTemplate();            
}


const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}



const appRoot = document.getElementById('app');




const renderTemplate = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? "Here are the options": "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>         
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }           
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

ReactDOM.render(template,appRoot);
    
    
}



renderTemplate();