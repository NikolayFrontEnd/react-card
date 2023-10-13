
import './App.css';
import UppPage from './myDocument/mainPaje';
import SecondPage from './seconMainPage/SecondPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Training from './seconMainPage/train';
import Training2 from './seconMainPage/thaining2';
import Food from './seconMainPage/food';
import Food2 from './seconMainPage/food2';
import Training3 from './seconMainPage/training3';
import Food3 from './seconMainPage/food3';
import Training4 from './seconMainPage/training4';
import Food4 from './seconMainPage/food4';
import Training5 from './seconMainPage/training5';
import Food5 from './seconMainPage/food5';
import Training6 from './seconMainPage/training6';
import Food6 from './seconMainPage/food6';
import Training7 from './seconMainPage/training7';
import Food7 from './seconMainPage/food7';
import Training8 from './seconMainPage/training8';
import Food8 from './seconMainPage/food8';
import Training9 from './seconMainPage/training9';
import Food9 from './seconMainPage/food9';
import Training10 from './seconMainPage/training10';
import Food10 from './seconMainPage/food10';
function App(props) {
  return (
<BrowserRouter>
    <div className="App">
<Routes>
<Route path="/" element={<UppPage />} />
<Route path="/newpage" element={<SecondPage />}/>
<Route path = "/train" element = {<Training/>}/>
<Route path = "/food" element = {<Food/>}/>
<Route path = "/trainn" element = {<Training2/>}/>
<Route path = "/foodd" element = {<Food2/>}/>
<Route path = "/trainnn" element = {<Training3/>}/>
<Route path = "/fooddd" element = {<Food3/>}/>
<Route path = "/trainnnn" element = {<Training4/>}/>
<Route path = "/foodddd" element = {<Food4/>}/>
<Route path = "/trainnnnn" element = {<Training5/>}/>
<Route path = "/fooddddd" element = {<Food5/>}/>
<Route path = "/trainnnnnp" element = {<Training6/>}/>
<Route path = "/foodddddp" element = {<Food6/>}/>
<Route path = "/trainnnng" element = {<Training7/>}/>
<Route path = "/fooddddg" element = {<Food7/>}/>
<Route path = "/trainnnnf" element = {<Training8/>}/>
<Route path = "/fooddddf" element = {<Food8/>}/>
<Route path = "/trainnnnw" element = {<Training9/>}/>
<Route path = "/fooddddw" element = {<Food9/>}/>
<Route path = "/trainnnnq" element = {<Training10/>}/>
<Route path = "/fooddddq" element = {<Food10/>}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
