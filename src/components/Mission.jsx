import React from "react";
import styles from "../style";
import { missionpng, missionpic, country, logotwo } from "../assets";

const Mission = () => (
    <section
        id="mission"
        className={`flex ${styles.paddingY} justify-center items-center`}>
        <div
            className="absolute z-[0] w-[30%] h-[50%] to left-5 
        rounded-full green__gradient"
        />
        <div className={`flex-col ${styles.flexStart} w-full text-left p-14`}>
            <h1
                className={`${styles.heading2}font-poppins font-light ss:text-[48px] text-[32px] text-white
            ss:leading-snug leading-[5px] mb-4 z-[10]`}>
                <span className="text-gradient-keymission">Our Mission</span>{" "}
            </h1>

            <div className="flex md:flex-row flex-col items-center mb-4 z-[10]">
                <h3 className="text-white">
                    Our Mission is to{" "}
                    <span className="text-gradient-keymission font-semibold text-lg">
                        empower students, foster creativity and entrepreneurship
                    </span>{" "}
                    to
                    <span className="text-gradient-keymission font-semibold text-lg">
                        {" "}
                        solve real-world challenges
                    </span>{" "}
                    with technology. <br />
                    This initiative unites diverse and passionate individuals
                    who aim to create positive and lasting change.
                    <br /> <br />
                    <span className="text-gradient-keymission font-semibold text-lg">
                        {" "}
                        Network, learn, innovate!
                        <br />
                    </span>{" "}
                    Engage with peers and compete in charitable innovation, gain
                    insights from successful entrepreneurs in a lively yet
                    professional environment.
                    <br /> <br />
                    <span className="text-gradient-keyCountry font-semibold text-xl">
                        {" "}
                        The focus of the Hackathon this year is to build a
                        technology that can be implemented in Bangladesh and
                        bring about positive change.
                        <br />
                    </span>{" "}
                </h3>
                <div
                    className="absolute z-[0] w-[30%] h-[50%] to right-5 
        rounded-full green__gradient"
                />
                <img
                    src={missionpic} // Replace with the actual path to your image
                    alt="Mission Image"
                    className="
                    p-8 z-10"
                    style={{
                        width: "54%",
                        marginLeft: "-3rem",
                        marginRight: "-4rem",
                    }}
                />
            </div>
        </div>
        <style jsx>{`
            @media (max-width: 700px) {
                img {
                    width: 100% !important; // Set to 100% for small screens
                    margin-left: 0; // Remove margin for small screens
                    margin-right: 0; // Remove margin for small screens
                }
            }
        `}</style>
    </section>
);

export default Mission;

// import React from "react";
// import styles from "../style";
// ss:w-[100px] ss:h-[100px]
//                     sm:w-[100px] sm:h-[100px]
//                     md:w-[300px] md:h-[300px]
//                     lg:w-[300px] lg:h-[300px]
//                     xl:w-[300px] xl:h-[300px]

// const Mission = () => (
//     <section
//         id="mission"
//         className={`flex ${styles.paddingY} justify-center items-center`}>
//         <div className={`flex-col ${styles.flexCenter} `}>
//             <div className="flex flex-col justify-items-center items-center justify-center w-full">
//                 <h1
//                     className="font-poppins font-light ss:text-[62px] text-[52px] text-white
//           ss:leading-snug leading-[5px]">
//                     {/* Empowering <br className="sm:block hidden" />{" "} */}
//                     <span className="text-gradient-keymission">
//                         Our Mission
//                     </span>{" "}
//                 </h1>
//             </div>
//         </div>
//         <div>
//             <br className="sm:block hidden" />
//             <h3>Our mission is too</h3>
//         </div>
//     </section>
// );

// export default Mission;

// // className={`flex md:flex-row flex-col ${styles.paddingY} `}>
// // <div
// //     className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
// //     <div className="flex flex- justify-between items-center w-full">
// //         <h1
