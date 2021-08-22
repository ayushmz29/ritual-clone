import './App.css';
import Article from './Components/Body/Article';
import MainWallpaper from './Components/Body/MainWallpaper';
import ProductCategories from './Components/Body/ProductCategories';
import ProductIntroduction from './Components/Body/ProductIntroduction';
import Header from './Components/Header/Header';


function App() {
  return (
    <>
      <Header />
      <MainWallpaper />
      <ProductCategories />
      <ProductIntroduction />
      <Article />
    </>
  );
}

export default App;
