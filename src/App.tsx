import { Route, Routes } from 'react-router-dom';
import DashBoardScreen from './pages/DashBoardScreen';
import UploadScreen from './pages/UploadScreen';
import Sidebar from './component/SideBar/SideBar';
import './App.css'
function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoardScreen />} />
          <Route path="/upload" element={<UploadScreen />} />
          <Route path="*" element={<DashBoardScreen />} />
        </Routes>
      </div>
    </>
  )
}

export default App
