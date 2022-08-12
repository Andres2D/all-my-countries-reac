import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import CountriesList from './pages/CountriesList';
import CountryPage from './pages/CountryPage';
import './App.css';
import Header from './components/shared/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/countries' />}
        />
        <Route 
          path='/countries'
          element={<Main />}
        />
        <Route 
          path='/countries/:regionId'
          element={<CountriesList />}
        />
        <Route 
          path='/countries/:regionId/:countryName'
          element={<CountryPage />}
        />
        <Route 
          path='*'
          element={<Navigate to='/countries' />}
        />
      </Routes>
    </div>
  );
}

export default App;
