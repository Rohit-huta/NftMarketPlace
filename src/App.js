import {Download, Features, SectionWrapper, Button} from './components';
import assets from './assets'
import styles from './styles/Globals';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title = "Your own store of Nifty NFTs. Start Selling & growing"
        description = "Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProfNef Marketplace"
        showBtn
        mockupImg = {assets.homeHero}
        banner = "banner"
      />
      <SectionWrapper 
        title = "Smart User Interface Marketplace "
        description = "Experience a buttery UI of ProNef NFT MArketplace. Smooth constant colots of a fluent UI design"
        mockupImg = {assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper 
        title = "Deployment"
        description = "ProfNet is built using Expo which runs natively on all users device. You can easily get your app into people hand's."
        mockupImg = {assets.feature}
        reverse  
      />
      <SectionWrapper 
        title = "Creative way to showcase the store"
        description = "The app contains two screens. The first screen lists all NFTs of a specific NFT."
        mockupImg = {assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText }`}>Made with love by {" "}
          <span className="bold">Rohit Hutagonna</span>
        </p>
      </div>
    </>
  );
}

export default App;