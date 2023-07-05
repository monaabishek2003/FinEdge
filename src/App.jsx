import styles from "./style";
import { Navbar,Hero,Stats,Aboutus,Services, Testimonials, CTA,Contact, Footer,} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Aboutus />
        <Services/>
        <Testimonials />
        <CTA />
        <Contact/>
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App;
