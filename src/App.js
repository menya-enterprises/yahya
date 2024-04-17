import './App.css';

import { AboutUs, FindUs, Header, Menu  } from './container';
import { NavBar } from './components';
import { useTranslation } from 'react-i18next';
import News from './container/News/News';
import Gallery from './container/Gallery/Gallery';

function App() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <NavBar handleChangeLanguage={handleChangeLanguage}/>
      <Header />
      <AboutUs />
      <Menu />
      <News />
      <Gallery/>
      <FindUs />
    </div>
  );
}

export default App;
