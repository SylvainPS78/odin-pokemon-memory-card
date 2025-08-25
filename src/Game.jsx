import "./assets/styles/Game.css";
import MainScreen from "./assets/components/MainScreen.jsx";
import Footer from "./assets/components/Footer.jsx";
import DifficultyModal from "./assets/components/DifficultyModal.jsx";

let isModalOpen = true;
let isGameActive = false;

function Game() {
  return (
    <>
      {isModalOpen && <DifficultyModal />}
      {isGameActive && <MainScreen />}

      <Footer />
    </>
  );
}

export default Game;
