import { Route, Routes } from 'react-router-dom';
import Lists from './Lists';
import Details from './Details';
import NavBar from './NavBar';

const App = () => (
  <>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  </>
);

export default App;
