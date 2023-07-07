import { Route, Routes } from 'react-router-dom';
import './App.css';
import  {HomepageRoutes, HomePageOutlet } from './module/homepage/Routes.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePageOutlet/>}>
        {HomepageRoutes}
      </Route>
    </Routes>
    </>

  );
}

export default App;
