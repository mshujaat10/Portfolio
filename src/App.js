import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
// import { Social } from './components/Social';
import { Info } from './components/Info';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Getusers } from './components/Getusers';
import AnimatedCursor from 'react-animated-cursor';


function App() {
  return (
    <>
    <AnimatedCursor
          innerSize={8}
          outerSize={40}
          outerScale={1.6}
          color="255,255,255"
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: 'difference'
          }}
    
    />
      <BrowserRouter>
        <Info />
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/get' element={<><Navbar /> <Getusers /> </>}></Route>

        </Routes>
      </BrowserRouter>











    </>
  );
}

export default App;