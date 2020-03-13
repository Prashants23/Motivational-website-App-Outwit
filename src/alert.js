import React from 'react';
import Details from './details';

function Test(){
    return (
        <div className="App">
            <i><b>LOKENDRA SINGH</b></i>
             <br/>
            <button onClick={TEWT}>click me!</button>
        </div>
      );
}
function TEWT(){
    alert("test")
return(<div>tets</div>)
  
  }

  export {Test, TEWT };
