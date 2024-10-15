import "./App.css";
import ButtonUsage from "./components/ButtonUsage";
import Header from "./components/Header";
import HeroSection from "./components/ImageSection";
import {Link} from 'react-router-dom'
import hero from './assets/images/hero.jpg'
import meal from './assets/images/meal.jpg'
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection Buttontitle='title' link ='/ ' imamge = {hero} title = 'The most luxurious and unique taste of serenity on the southern cost of the Island' subtitle = ''/>
      <HeroSection Buttontitle='title' link ='/ ' imamge = {meal} title = 'Eat And Drink' />
    </div>
  );
}

export default App;
