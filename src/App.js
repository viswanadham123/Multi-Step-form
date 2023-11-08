
import Step1 from "./Pages/Step1"
import Step2 from "./Pages/Step2"
import Step3 from "./Pages/Step3";
import Step4 from "./Pages/Step4";

import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';

function App() {
  return (
    
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step3} />
        <Route exact path="/step4" component={Step4} />
      </Switch>
 </BrowserRouter>

  );
}

export default App;
