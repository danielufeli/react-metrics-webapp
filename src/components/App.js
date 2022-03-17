import { Route, Routes } from 'react-router-dom';
import Lists from './Lists';
import Details from './Details';
import Header from './Header';

const App = () => (
  <>
    <div className="container">
      <div className="panel-bg">
        <Header />
        <Routes>
          <Route path="/" element={<Lists />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
