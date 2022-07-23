
import './App.css';
import Header from './hompage-component/header';
import Futured from './hompage-component/futured';
import Cta from './hompage-component/cta';
import Navbar from './hompage-component/navbar';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Futured />
      <Cta />
    </div>
  );
}

export default App;
