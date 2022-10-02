import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import List from './components/List';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<List/>} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
