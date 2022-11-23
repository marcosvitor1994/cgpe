import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Routers from './routes/Routes';

function App() {
  return (
    <div className="App"
    
    

    >
      <Router>

        <Menu />
        <Routers />
        <Footer />

      </Router>
      
    </div>
  );
}

export default App;
