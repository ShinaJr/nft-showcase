import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling and Growing"
        description="Buy, store, collect NFTs, collect and exchange crypto. Join 25+ million people using proNef Marketplace. "
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design "
        mockupImg={assets.homeCards}
        reverse
      />
      <Features banner="banner03" />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using expo which runs natively on all users' devices. You can easily get your app into people's hands "
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT. "
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download/>
      {/* footer */}
      <div className={`px-4 py-2 ${styles.bgPrimary} justify-center items-center flex-col text-center banner04 `}>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by
        <span className="bold"> Shina Jr</span>
        </p>
      </div>
    </>
  );
};

export default App;
