import './App.css';

import { AboutUs, FindUs, Footer, Header, Menu  } from './container';
import { NavBar } from './components';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
