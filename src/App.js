import React from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';



import Welcome from './Pages/Welcome/Template'
import Info from './Pages/Info/Template'
import Load from './Pages/Loading/Template'
import Chat from './Pages/Chat/Template'
import NotFound from './Pages/NotFound/Template'
import Declarations from "./Configuration.json"
let Pages = Declarations.Pages;


export const userContext = React.createContext()
function App() {
  const isTouchDevice = () => {  
    return (('ontouchstart' in window) ||  
      (navigator.maxTouchPoints > 0) ||  
      (navigator.msMaxTouchPoints > 0));  
  }  
  console.log(isTouchDevice())
  let currentPath = useLocation().pathname;
  const navigate = useNavigate();
  React.useEffect(() => {
    if( isTouchDevice() === false){
  window.addEventListener('keydown', (e) => {
    if(currentPath === "/" && e.code === 'Space') 
    navigate('/info', {replace: true});
      currentPath = "/Info"
  });
}else{
  window.addEventListener('click', (e) => {
    if(currentPath === "/" && isTouchDevice() === true)
    navigate('/info', {replace: true});
      currentPath = "/Info"
  });
}
  });
  return (

    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route path="/Info" element={<Info />}/>
      <Route path="/Chat" element={<Chat />}/>
      <Route path="/Load" element={<Load />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    

  );
}

export default App;
