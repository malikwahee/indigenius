import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './PAGE/Navbar';
import Cardpage from './PAGE/Cardpage';
import Home from './PAGE/Home';
import Formpag from './PAGE/Formpag';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cardpage />
      <Formpag />
    </div>
  );
}

export default App;
