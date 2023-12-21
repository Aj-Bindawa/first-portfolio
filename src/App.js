import { onValue, ref } from 'firebase/database';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import { db } from './Config/FirebaseConfig';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Messages from './Pages/Messages';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Services from './Pages/Services';

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => { //get messages from database
    onValue(ref(db, 'messages'), (snapshot) => {
      setMessages([])
      const data = snapshot.val();
      if(data !== null) {
        Object.values(data).map((message) => {
          setMessages((oldArray) => [...oldArray, message])
        })
      }
    })
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={ <About />}/>
      <Route exact path='/services' element={<Services />}/>
      <Route exact path='/resume' element={<Resume />}/>
      <Route exact path='/portfolio/' element={<Portfolio />}/>
      <Route exact path='/contact-Aj' element={<Contact />}/>
      <Route exact path='/messages' element={<Messages messages={messages}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;