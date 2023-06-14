import React from 'react';
import { useState } from 'react';
import Btn from './Components/btn';
import Count from './Components/count';

function App() {
     const [text, setText] = useState('hello');
     
     const clickMe =() =>{
          setText('changed');
     }
     return(
      <div>
          <p>{text}</p>
       <Btn name="Ann"/>
       <Btn name="Uche"/>
       <Btn name="Amaka" onClick={clickMe} /> 
       <div>
       <Count />
       </div>

      </div>
     
     );
    
  

}
export default App;
