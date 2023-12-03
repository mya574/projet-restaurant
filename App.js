import Header from "./components/nav bar"
import Paragraphe from "./components/interface"; 
import Menu from "./components/menu";
import Expert from"./components/expert";
import VoirPlus from "./components/btn";
import Specialité from "./components/specialite";
import Footer from "./components/footer";

function App() {
  return (
    
    <div className="App">
      <Header> </Header>
      <Paragraphe></Paragraphe>
      <Menu></Menu>
      <VoirPlus></VoirPlus>
      <Expert></Expert>
      <Specialité></Specialité>
      <Footer></Footer>
    </div>
  );
}
export default App;
