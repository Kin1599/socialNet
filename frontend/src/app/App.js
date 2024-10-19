import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import '../shared/styles/App.scss';
import MainPage from '../pages/MainPage/MainPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Navigate to="/" replace/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
