import React from "react";
import styles from "../style";

import { globe } from "../assets";

const Hero = () => (
    <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div
            className={`flex-1 ${styles.flexStart} 
            flex md:flex-row flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex- justify-between items-center w-full">
                <h1
                    className="flex-1 font-poppins font-semibold ss:text-[52px] text-[40px] text-white
          ss:leading-snug leading-[50px] md:text-[57px] md:leading-[80px] xl:text-[62px] xl:leading-[90px] z-[8]">
                    Empowering <br className="sm:block hidden" />{" "}
                    <span className="text-gradient-keymuslim">Muslim</span>{" "}
                    Programmers <br className="sm:block hidden" /> across the
                    Ummah
                </h1>
            </div>
            <div>
                <img
                    src={globe}
                    alt="globeIcon"
                    className="relative z-[5] w-[100%]"
                />
                <div
                    className="absolute z-[5] w-[40%] h-[50%] top-10 ss:bottom-40 right-0 pink__gradient"
                    style={{ pointerEvents: "none" }}
                />
                <div
                    className="absolute z-[0] w-[40%] h-[50%] bottom-0 right-10 blue__gradient"
                    style={{ pointerEvents: "none" }}
                />
            </div>
        </div>
    </section>
);

export default Hero;
