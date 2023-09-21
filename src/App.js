import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import StartPage from './StartPage';

function App() {
  return (
    // <QuestionPage/>
     <Router>
           <div className="App">

        <Routes>
          <Route exact path='/' element={<StartPage/>} />
          <Route exact path='/startPage' element={<StartPage/>} />


      </Routes>
      </div>

    </Router>
  );
}

export default App;
