import { Route, Routes } from 'react-router-dom';
import './App.css';
import  {HomepageRoutes, HomePageOutlet } from './module/homepage/Routes.js';
import { DashboardOutlet, DashboardRoutes } from './module/dashboard/routes';
import { AIRoutes } from './module/AI section/routes';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePageOutlet/>}>
        {HomepageRoutes}
      </Route>
      <Route path='/dashboard' element={<DashboardOutlet/>}>
        {DashboardRoutes}
      </Route>

      <Route path='/'>
        {AIRoutes}
      </Route>
    </Routes>
    </>

  );
}

export default App;
