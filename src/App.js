import React ,{useState} from 'react'
import data from './data';
import './App.css';
import SingleQuestion from './Question'


function App() {
  const [questions,setQuestions]=useState(data);
  return (
    <div className="App">

<main>
  <div className="container ">
  <div class="row bg-light ">
  <div class="col-sm heading bg-light " >
     <h3 className='bg-light'>Questions and answers about login</h3>
    </div>
    
    <div class="col-sm info bg-light">
    {questions.map((question)=>{
      return <SingleQuestion key={question.id}{...question} className='bg-light'/>
    })}
    </div>
  </div>
 
  </div>
</main>



    </div>
  );
}

export default App;
