import { Route, Routes } from 'react-router-dom';
import DashBoardScreen from './pages/DashBoard/DashBoardScreen';
import UploadScreen from './pages/Upload/UploadScreen';
import Sidebar from './component/SideBar/SideBar';
import ExportPleScreen from './pages/ExportPle/ExportPleScreen';
import DocumentScreen from './pages/Documents/DocumentScreen';
import './App.css'
function App() {
  return (
    <>
      <div className='app-container'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashBoardScreen />} />
          <Route path="/upload" element={<UploadScreen />} />
          <Route path='/documents' element={<DocumentScreen />} />
          <Route path='/ple' element={<ExportPleScreen />} />
          <Route path="*" element={<DashBoardScreen />} />
        </Routes>
      </div>
    </>
  )
}

export default App
