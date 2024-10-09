import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import '../shared/styles/App.scss';
import MainPage from '../pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Navigate to="/" replace/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
