import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Components/Home/Services/Services';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Notfound from './Components/Notfound/Notfound';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './RequireAuth/RequireAuth';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        <Route path="/checkout" element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
