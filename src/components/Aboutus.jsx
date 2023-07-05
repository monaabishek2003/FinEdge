import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Aboutus = () =>  (
  <section id="Aboutus" className={layout.section}>
    <div className={layout.sectionInfo}>
      <div>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Who We Are</h2>
        </div>
      <p 
        className="mt-4  text-[17px] max-w-8xl leading-[30px] font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]" 
      >
        At FinEdge, we are a team of passionate professionals dedicated to revolutionizing cross-border payments. With a deep understanding 
        of the challenges faced in international finance, we strive to provide seamless and secure solutions for individuals and businesses 
        worldwide. Our expertise in cutting-edge technology and commitment to customer satisfaction drive us to deliver innovative payment 
        services that transcend geographical boundaries. Join us on our mission to transform the way the world conducts cross-border transactions.
      </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Aboutus;
