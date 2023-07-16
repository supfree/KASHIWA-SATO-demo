import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { data } from "./data/data";

function App() {
  return (
    <div>
      <Header />
      <List list={data} />
      <Footer />
    </div>
  );
}

export default App;
