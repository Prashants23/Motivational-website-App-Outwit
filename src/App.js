import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      quote:[],
      img:[],
      isLoaded:'false',
      id:1
    }
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(
        (result) => {
         
          this.setState({
            isLoaded: true,
            quote: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            
            error
          });
        }
      )
  }

test=()=>{
  console.log(this.state.quote)
}


  render(){
    return(<div><img className="logo" src={require("./Logo.png")}/>
    <button onClick={this.test}>test</button>
    <div className="container">{   
        this.state.quote.slice(0,100).map((user, key)=>
        <div className="img">
          <div  className="centered" key={key}>
         <p> {user.text}</p>
          <p>- {user.author}</p>

         
        </div>
          <img className="car" src={`https://i.picsum.photos/id/${key}/400/250.jpg`}/>
          
        </div>)



    }
    </div>
     {/* <img src={require("./Logo.png")}/> */}
    
    </div>)
  }







}



export default App;
