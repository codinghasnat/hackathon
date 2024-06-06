import React from "react";
import styles from "../style";
import LinkTwo from "./LinkTwo";
import LinkThree from "./LinkThree";

const Communications = () => (
    <section
        id="contact"
        className={`flex ${styles.paddingY} justify-center items-center`}>
        <div
            className="absolute z-[0] w-[50%] h-[50%]
        rounded-full comms__gradient"
        />
        <div className={`flex-col ${styles.flexCenter}`}>
            <div className="flex flex-col justify-center items-center z-[10]">
                <h1
                    className="font-poppins font-medium ss:text-[32px] text-white
          ss:leading-snug leading-[1px] text-center mb-4">
                    <span
                        className="text-gradient-keycomms ss:text-[52px] text-[52px]
                    ss:leading-snug leading-[50px] md:text-[57px] md:leading-[80px] 
                    xl:text-[62px] xl:leading-[90px]">
                        WhatsApp and Discord
                    </span>
                </h1>
                <div>
                    <h1
                        className="text-gradient-keycomms ss:text-[32px] text-[32px]
                        ss:leading-snug leading-[30px] md:text-[37px] md:leading-[50px] 
                        xl:text-[32px] xl:leading-60px]"></h1>
                </div>
                <div className="ss:flex md:mr-4 mr-0">
                    <LinkTwo />
                    <LinkThree />
                </div>
            </div>
        </div>
    </section>
);

export default Communications;
