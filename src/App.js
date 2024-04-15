import './App.css';

import { AboutUs, FindUs, Header, Menu  } from './container';
import { NavBar } from './components';
import { useTranslation } from 'react-i18next';

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
      <FindUs />
    </div>
  );
}

export default App;
