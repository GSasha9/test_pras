import Banner from "./components/Banner/Banner";
import { BANNERS_DATA } from "./shared/constants/banners-data";

function App() {
  return <Banner {...BANNERS_DATA.header}/>;
}

export default App;
