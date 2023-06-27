import { Link } from 'react-router-dom';
import './css/styles.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/upload">Proceso de carga</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
