import {
  Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const x = 'home';

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home id={x} />} />
      </Routes>
    </div>
  );
}

export default App;
