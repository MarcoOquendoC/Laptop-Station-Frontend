import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  const location = useLocation();
  const id = location.state;

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail id={id} />} />
      </Routes>
    </div>
  );
}

export default App;
