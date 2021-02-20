import './App.css';
import About from './Components/About/About';
import Class from './Components/Class/Class';
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/HeaderMain';
import Home from './Components/Home/Home';
import Price from './Components/Prices/Price';
import Schedule from './Components/Schedule/Schedule';
import Service from './Components/Service/Service';
import Today from './Components/Today/Today';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Class></Class>
      <Today></Today>
      <Schedule></Schedule>
      <Gallery></Gallery>
      <Price></Price>
      <Contact></Contact>
    </div>
  );
}

export default App;
