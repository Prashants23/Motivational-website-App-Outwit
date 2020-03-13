import React from 'react';

class Details extends React.Component{
    constructor()
    {
        super()
        this.state={
            input:'',
        }
    }

    onSearchChange=(event)=>{
        this.setState({input:event.target.value})
    }

    render(){
        return(<div>This is a demo

            <input onChange={this.onSearchChange}/>

            <div>{this.state.input}</div>



        </div>)
    }


}

export default Details;