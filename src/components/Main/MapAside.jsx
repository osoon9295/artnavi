import logoImage from '../../../public/logo/artnavi.png';
import CardList from './ExhibitList';
import WeatherInfo from './WeatherInfo';

export default function MapAside() {
  
  return (
    <div className="w-[320px] h-[920px] bg-amber-200">
      <header className="flex items-center">
        <img src={logoImage} className="mr-4" />
        <WeatherInfo />
      </header>
      <CardList />
      <footer>
        <p className="text-center text-green-500">@2024 all rights reserved</p>
      </footer>
    </div>
  );
}
