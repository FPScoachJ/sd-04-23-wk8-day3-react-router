import forJustinImage from "./img/for_Justin.png";
import "./Home.css"

function Home() {
  return (
    <div className="home-container">
      <h1>Justin Anzalone</h1>
      <img src={forJustinImage} alt="For Justin" />
    </div>
  );
}

export default Home;
