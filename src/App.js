import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Reserve from './components/Reserve';
import Reservations from './components/Reservations';
import Session from './components/Session';
import Registration from './components/Registration';
import AddItem from './components/AddItem';

function App() {
  const location = useLocation();
  const id = location.state;

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Session />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:itemId" element={<Detail id={id} />} />
        <Route path="/detail/:itemId/reserves" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
