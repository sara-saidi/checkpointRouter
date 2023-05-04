
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Tete from './components/Tete'
import Profile from './components/Profile';
import Home from './components/Home';
import Contact from './components/Contact';
import Setting from './components/Setting';
import ProductList from './components/ProductList';
import Description from './components/Description';
function App() {
const products=[
 { name:'prod1',id:1,descreption:'desc prod 1 '},
 { name:'prod2',id:2,descreption:'desc prod 2 '},
 { name:'prod3',id:3,descreption:'desc prod 3 '}
]
  const navigate=useNavigate()

  const getProfile=()=>{
    const isAuth=false
    if (isAuth=== true){
      navigate('/Profile')
    } else {
      navigate('*')
    }
  }
  return (
    <div className="App">
    <Tete/>
      <Routes>
      <Route path='/' element={<Home getProfile={getProfile}/>}/>
      <Route path='/Profile' element={<Profile/>}>
        <Route path='Setting' element={<Setting/>}/>
      </Route>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<h1>404 not found</h1>}/>
      <Route path='/ProductList' element={<ProductList products={products}/>}/>
      <Route path='/Description/:id' element={<Description products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
