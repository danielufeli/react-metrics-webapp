import { Route, Routes } from 'react-router-dom';
import ListDetails from './ListDetails';
import NavBar from './NavBar';
import Home from './Home';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<ListDetails />} />
    </Routes>
  </>
);

export default App;
