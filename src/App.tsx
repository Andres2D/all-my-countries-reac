import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import CountriesList from './pages/CountriesList';
import Country from './pages/Country';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/main' />}
        />
        <Route 
          path='/main'
          element={<Main />}
        />
        <Route 
          path='/countries/:regionId'
          element={<CountriesList />}
        />
        <Route 
          path='/country/:countryName'
          element={<Country />}
        />
        <Route 
          path='*'
          element={<Navigate to='/main' />}
        />
      </Routes>
    </div>
  );
}

export default App;
