import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import {data} from './data/data';


function App() {
  return (
    <div>
        <Header/>
        <Search placeholder="Search a challenge..." data={data}/>
        <Gallery />
        <Footer/>
   </div>
  );
}

export default App;
