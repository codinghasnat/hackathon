import { panelists } from "../constants";
import styles from "../style";
import Boxes_2 from "./Boxes_2";

const Panelists = () => (
    <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div
            className="absolute z-[0] w-[60%] h-[60%] right[90%] 
        rounded-full blues__gradient"
        />
        <div className="absolute z-[0] w-[60%] h-[10%] top-10 left-1 rounded-full yellows__gradient" />

        {/* Gradients */}
        <div className={`flex-col ${styles.flexStart} w-full text-left p-10`}>
            <h1
                className={`${styles.heading2}font-poppins font-light ss:text-[48px] text-[32px] text-white
            ss:leading-snug leading-[5px] mb-4`}>
                <span className="text-gradient-keypanelists">
                    Our Panelists for 2024
                </span>{" "}
            </h1>
        </div>
        <div className="flex flex-wrap sm:justify-center justify-center w-full relative z-[1]">
            {panelists.map((card) => (
                <Boxes_2 key={card.id} {...card} />
            ))}
        </div>
    </section>
);

export default Panelists;

// section
//         id = "clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative
// `}>
//         {speakers.map((speaker) => (
//             <div
//                 key={speaker.name}
//                 className={`flex-1 flex justify-start items-center flex-row m-3 z-10 p-1`}>
//                 <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
//                     {speaker.content}
//                 </h4>
//                 <div>
//                     <p className="font-poppins xs:text-[20px] font-bold text-[15px] xs:leading-[26px] leading-[21px] text-gradient-keykey p-2">
//                         {speaker.title}
//                     </p>
//                     {speaker.subtitle && (
//                         <p className="font-poppins font-semibold xs:text-[15px] text-[12px] xs:leading-[26px] leading-[18px] text-gradient-keykey p-2">
//                             {speaker.subtitle}
//                         </p>
//                     )}
//                 </div>
//             </div>
//         ))}
