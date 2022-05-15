import DAO from "layouts/DAO";
import Footer from "layouts/Footer";
import Hero from "layouts/Hero";
import Mission from "layouts/Mission";
import Navbar from "layouts/Navbar";
import Ownership from "layouts/Ownership";
import Roadmap from "layouts/Roadmap";
import SmartContract from "layouts/SmartContract";
import Video from "layouts/Video";

function App() {
  return (
    <div className="App">
      <div className="mb-80px">
        <Navbar />
      </div>
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-50px">
        <Mission />
      </div>
      <div className="mb-80px">
        <Video />
      </div>
      <div className="mb-150px">
        <Roadmap />
      </div>
      <div className="mb-150px">
        <DAO />
      </div>
      <div className="mb-150px">
        <Ownership />
      </div>
      <div className="mb-150px">
        <SmartContract />
      </div>
      <Footer />
    </div>
  );
}

export default App;
