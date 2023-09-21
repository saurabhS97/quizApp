import logo from './logo.svg';
import './App.css';
import './StartPage.js'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import QuestionPage from './QuestionPage';
import StartPage from './StartPage';
import Result from './Result';

function App() {
  return (
    // <QuestionPage/>
     <Router>
           <div className="App">

        <Routes>
          <Route exact path='/' element={<StartPage/>} />
          <Route exact path='/startPage' element={<StartPage/>} />

           <Route  path='/questionPage' element={<QuestionPage/>}/>
           <Route  path='/result' element={<Result/>}/>

      </Routes>
      </div>

    </Router>
  );
}

export default App;
