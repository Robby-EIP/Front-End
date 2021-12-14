import './App.css';
import RobotPageContainer from './components/robotsUsageContainer/robotscontainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<RobotPageContainer/>}></Route>
    </Routes>
  );
}

export default App;
