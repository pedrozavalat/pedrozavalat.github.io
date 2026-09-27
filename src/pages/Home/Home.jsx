import { DarkModeProvider } from "./HomeContext";
import { HomeOverview } from "./elements/HomeElements";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <DarkModeProvider>
        <HomeOverview />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default Home;
