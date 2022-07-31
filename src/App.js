import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Drawer from './Components/Drawer';
import Content from './Components/Content';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
