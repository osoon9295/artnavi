import logoImage from '/public/logo/artnavi.png';
import BasicMap from '../components/BasicMap';
import ExhibitList from '../components/ShowAside/ExhibitList';
import WeatherInfo from '../components/ShowAside/WeatherInfo';

export default function Layout() {
  
  return (
    <>
      <div className="w-[1440px] h-[920px] flex m-auto">
        <BasicMap />
        <div className="w-[320px] h-[920px] bg-amber-200">
          <header className="flex items-center">
            <img src={logoImage} className="mr-4" />
            <WeatherInfo />
          </header>
          <ExhibitList />
          <footer>
            <p className="text-center text-green-500">@2024 all rights reserved</p>
          </footer>
        </div>
      </div>
    </>
  );
}
