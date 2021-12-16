import './App.css';
import RobotPageContainer from './components/robotsUsageContainer/robotscontainer';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';
dotenv.config();

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<RobotPageContainer/>}></Route>
    </Routes>
  );
}

export default App;
