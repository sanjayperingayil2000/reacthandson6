
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Students from './pages/students';
import Contactus from './pages/contactus';
import { Edit } from './pages/edit';
import Details from './components/Details';
import New from './pages/new';


function App() {
  return (
    <>
    <BrowserRouter>
    <Details>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/students/:studentId' element={<Edit/>}/>
      <Route path='/new' element={<New/>}/>
      </Routes>
    </Details>
    </BrowserRouter>
    </>
  );
}

export default App;
