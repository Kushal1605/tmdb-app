import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header"
import SimpleBottomNavigation from './Components/mainNavBar'
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Seach';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
function App() {
  return (
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Container>
        <Routes>
          <Route path='/' Component={Trending} exact/>
          <Route path='/Movies' Component={Movies}/>
          <Route path='/Series' Component={Series}/>
          <Route path='/Search' Component={Search}/>
        </Routes>
      </Container>
    </div>
      <SimpleBottomNavigation/>
      </BrowserRouter>
  );
}

export default App;
