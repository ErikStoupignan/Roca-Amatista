import Navbar from "../navbar/navbar";
import MainPage from "../home/main-page";
import "swiper/css/bundle";
import '../../index.scss';

const App = () => {
  return (
    <section className="AppContainer">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="Containerpages">
        <MainPage />
      </div>
    </section>
  );
}

export default App;
