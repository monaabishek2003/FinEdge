import { services } from "../constants";
import {bill} from "../assets";
import styles, { layout } from "../style";

const Service = () => (
  
  <section id="services">
    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
    What We Offer
    </h2>
    {services.map((service)=>(
      <div  key={service.id} className={layout.sectionReverse}>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
          {service.title}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {service.content}
          <br className="sm:block hidden" />
          <br className="sm:block hidden" />
          <span className="text-gradient"> Key Features : </span>
          {service.keyFeatures}
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
      </div> 
    ))}
  </section>
);

export default Service;
