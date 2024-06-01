import React from "react";
import styles from "../style";
import { pstatementspic } from "../assets";

const Mission = () => (
    <section
        id="mission"
        className={`flex ${styles.paddingY} justify-center items-center`}>
        <div className="absolute z-[0] w-[30%] h-[50%] to left-5 rounded-full " />
        <div className={`flex-col ${styles.flexStart} w-full text-left p-14`}>
            <h1
                className={`${styles.heading2}font-poppins font-light ss:text-[48px] text-[32px] text-white ss:leading-snug leading-[5px] mb-4 z-[10]`}>
                <span className="text-gradient-keykey">
                    Our Theme: Post Conflict Resolutions
                </span>{" "}
            </h1>

            <div className="flex md:flex-row flex-col items-center mb-4 z-20">
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={pstatementspic} // Replace with the actual path to your image
                        alt="Problem Statements Pic"
                        className="p-8 z-10"
                        style={{
                            width: "54%",
                            marginLeft: "-3rem",
                            marginRight: "-4rem",
                        }}
                    />
                    <div className="text-white ml-4 p-8 z-20">
                        <h3>
                            Embrace the opportunity to make a real difference in
                            the world by tackling pressing issues in{" "}
                            <span className="text-gradient-keykey font-semibold text-lg">
                                healthcare, education, construction, and social
                                cohesion.
                            </span>{" "}
                        </h3>
                        <br />
                        <h3>
                            <span className="text-gradient-keykey font-semibold text-lg">
                                Together,
                            </span>{" "}
                            we can construct a better tomorrow for
                            conflict-affected communities insha'Allah!
                        </h3>
                        <br />
                        <h3>
                            <span className="text-gradient-keykey font-semibold text-lg">
                                Together,
                            </span>{" "}
                            with your skills and passion we can shape impactful
                            solutions that will positively impact lives
                            insha'Allah!
                        </h3>
                        <br />
                        <h3>
                            <span className="text-gradient-keykey font-semibold text-xl">
                                {" "}
                                Together, we can turn challenges into
                                opportunities and sow the seeds of hope
                                insha'Allah!
                            </span>{" "}
                        </h3>
                    </div>
                </div>
                <div
                    className="absolute z-[0] w-[60%] h-[30%] to left-7 
            rounded-full whiteps__gradient"
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
