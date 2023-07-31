import React, {useState} from 'react'
import './Form.css';

export default function Form(props) {
    const [text, setText] = useState('Type Here')
    const handleOnChange =(events)=> {
        setText(events.target.value)
    }
    //---------------------------------------------- UPPER CASE CONVERTER------------------------------\\
   const handleClick =() =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text Convert UpperCase")

   }
   
       //---------------------------------------------- LOWER CASE CONVERTER------------------------------\\
   const handle2Click =() =>{
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("Text Convert LowerCase")

   }
       //---------------------------------------------- ONE WORD  one by one CHANGE CAPATILIZED CASE CONVERTER------------------------------\\
   const capatilized =() =>{
    var x = text.toLowerCase().replace(/\s+/g, ' ');
    var newText = x.split(" ");
    for (var i = 0; i< newText.length; i++) {
        newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1)
    }
    setText(newText.join(" ")+'.')
    props.showAlert("Text Convert Capitalized Case")
   }
   //--------------------------------------------------one word change to capatilized---------------------------------\\
   const sentense =() =>{
    var newText = text.toLowerCase().split(" ");
    for (var i = 0; i< 1; i++) {
        newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1)

    }
    setText(newText.join(" "))
    props.showAlert("Text Convert In Sentence")

   }
   //----------------------------------------------------Alternative- Case-----------------------------\\
   const alternate = () => {
    var newText = text.toLowerCase().split("");
    for (var i = 0; i< newText.length; i += 2){
        newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(""))
    props.showAlert("Text Convert In Alternate")

   }
   //------------------------------------------Inverse Case-------------------------------------\\
   const inverse = () => {
    var newText = '';
    var i = 0;
    while ( i< text.length){
        var n = text.charAt(i);
        if ( n === n.toUpperCase()) {
            n = n.toLocaleLowerCase()
        }else {
            n = n.toUpperCase()
        }
        i += 1;
        newText += n;

    }
    setText(newText)
    props.showAlert("Text Convert In Inverse Case")

   }
   //-----------------------------------Reverse Case-----------------------------------------\\
   const reverse = () => {
    let newText = text.split("").reverse();
    setText(newText.join(""))
    props.showAlert("Text Convert In Reverse Case")

   }
// ---------------------word Revers------------------------------------//
   const wreverse = () => {
    let newText = text.split(" ").reverse();
    setText(newText.join(" "))
    props.showAlert("Text Convert In Word REverse")

   }
  //  ---------------------------Clear-----------------------------//
   const handleClear =() =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text Clear")

   }
  //  Delet Text-------------------//
   const handleDelete = () => {
    let newText = text.slice(0,-1)
    setText(newText)

   }
  //  -------------------------------------copy tExt============//
   const handleCopy =() => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copy")

   }
   //-----------------------------Remove Extra----------------//
   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Space")

   }
const para = document.querySelector('.para')
   const Click2 = ()=>{
    para.classList.toggle('p')
}
   var lines = text.split("\n")
  return (
    <>
   <div className="container mt-5">
    <div className='animation'>
    <h1 className="typewriter">Wel<span>co</span>me <span>to</span> Te<span>x</span>t <span>Co</span>nv<span>er</span>ter</h1>
    </div>
    </div>
    <div className=' container mt-5'>
      <div className='para p' onClick={Click2}>
        <p>Copy the text</p>
      </div>
    <textarea type="button" className='form-control' value={text} onChange={handleOnChange} rows="10"></textarea>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1"  onClick={handleClick}>{props.button}</button>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1"  onClick={handle2Click}>{props.button2}</button>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1" onClick={capatilized}>{props.button3}</button>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1" onClick={sentense}>{props.btn4}</button>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1" onClick={alternate}>{props.btn5}</button>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1" onClick={inverse}>{props.btn6}</button>
    <button type="button" disabled={text.length===0} className="btn btn-outline-secondary btn-sm mt-3 mx-1" onClick={reverse}>{props.btn7}</button>
    <button type="button" disabled={text.length===0} className="btn mt-3 btn-outline-secondary btn-sm mx-1" onClick={wreverse}>{props.btn8}</button>
    <button type="button" disabled={text.length===0} className="btn mt-3 btn-outline-secondary btn-sm mx-1" onClick={handleClear}>{props.btn9}</button>
    <button type="button" disabled={text.length===0} className="btn mt-3 btn-outline-secondary btn-sm mx-1" onClick={handleDelete}>{props.btn10}</button>
    <button type="button" disabled={text.length===0} className="btn mt-3 btn-outline-secondary btn-sm mx-1" onClick={handleCopy}>Copy Text</button>
    <button type="button" disabled={text.length===0} className="btn mt-3 btn-outline-secondary btn-sm mx-1" onClick={handleExtraSpaces}>{props.btn11}</button>

   </div>
   <div className=' container para mt-5'>
    <h2>Text Summary:</h2>
   <span>Count Text Length: <b>{text.length}</b></span>
   <span className=' mx-3'>Count Word Spacing:  <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length
   }</b></span>
   <span>Minutes read: <b>{0.008* text.split(" ").length}</b></span>
   <span className='mx-2'>Line count: <b>{lines.length-1}</b></span>
   <h4>Preview:</h4>
   <p>{text}</p>
   </div>
   <div className="container mt-5">
        <div className ="convert-case">
            <h3>Welcome to the Convert Case Text Generator Tool</h3>
            <p>A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options above:</p>
        </div>
    </div>
 <div className="container mt-5">
 <div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Upper Case</h3>
        <p className="card-text">The upper case transformer will take any text that you have and will generate all the letters into upper case ones.</p>
        <a href="/" className="btn sen btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Lower Case</h3>
        <p className="card-text">The lower case transformer will take any text that you have and will generate all the letters into lower case ones.</p>
        <a href="/" className="btn sen btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Capatilized Case</h3>
        <p className="card-text">The capitalized case converter will convert the starting letter of every word into an upper case and remaining letters as lower case ones.</p>
        <a href="/" className="btn btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Sentence Case</h3>
        <p className="card-text">The sentence case converter It works by capitalizing the very first letter in each sentence,</p>
        <a href="/" className="btn senc btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div className="container mt-4">
 <div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">AlTeRnAtE Case</h3>
        <p className="card-text">The Alternate case transformer will take any text that you have and will generate all the letters into alternates case words.</p>
        <a href="/" className="btn inv btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Inverse Case</h3>
        <p className="card-text">If you want a fast and quick way of making your text go back to front, the reverse text generator is great.</p>
        <a href="/" className="btn inv btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Reverse Case</h3>
        <p className="card-text">If you want a fast and quick way of making your text go back to front, the reverse text generator is great.</p>
        <a href="/" className="btn inv btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Word Reverse Case</h3>
        <p className="card-text">If you want a fast and quick way of making your word go back to front, the reverse word generator is great.</p>
        <a href="/" className="btn btn-outline-secondary">Learn More</a>
      </div>
    </div>
  </div>
</div>
 </div>
<div className="container-fliud mt-5">
<footer className="footer-text bg-dark">
  <div className='f-row'>
  <p><b>@aniketverma</b></p>
  <div className='icons'>
  <i className="fa-brands fa-instagram"></i>
  <i className="fa-brands fa-facebook"></i>
  <i className="fa-brands fa-twitter"></i>
  <i className="fa-brands fa-linkedin"></i>
  </div>
</div>
</footer>
</div>
    </>

  )
}
