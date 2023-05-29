import { Route } from "react-router-dom";

import FirstPage from "./Pages/AllMeetUps";
import SecondPage from "./Pages/Favorites";
import ThirdPage from "./Pages/NewMeetUps";

function App() {
  return (
      
        <div>
       <Route path="/">
        <FirstPage />
       </Route>
       <Route path="/Second">
        <SecondPage />
       </Route>
       <Route path="/Third">
        <ThirdPage />
       </Route>
    
       </div>
  
    
    
  
  );

}

export default App;
