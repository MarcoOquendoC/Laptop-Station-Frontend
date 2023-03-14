import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Reserve from './components/Reserve';
import Session from './components/Session';
import Registration from './components/Registration';

function App() {
  const location = useLocation();
  const id = location.state;

  return (
    <div className="container">
      <Routes>
        <Route path="/signin" element={<Session />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail id={id} />} />
        <Route path="/detail/id/reserve" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;
