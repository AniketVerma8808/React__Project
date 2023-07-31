import Navbar from './Component/Navbar';
import './App.css';
import Form from './Component/Form'
import Alert from './Component/Alert';
import React,{useState} from 'react';
function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type) =>{
    setAlert(
   {
    msg: massage,
    type: type
   }
    )
    setTimeout(() =>{
      setAlert(null)
    },1000);
  }
  return (
   <>
   <Navbar/>
   <Alert alert ={alert}/>
   <Form showAlert={showAlert} alert="this is alert" button ="Change to UpperCase" button2 = "Change to LowerCase" button3 ="Capatilize Case" btn4 = "Sentence" btn5 = "AlTeRnAtE CaSe" btn6 ="Inverse Case" btn7="Reverse Case" btn8 ="Word Reverse" btn9 ="Clear Word" btn10 ="Delete Text" btn11="Remove ExtraSpace"/>
   </>
  );
}

export default App;
