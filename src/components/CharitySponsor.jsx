import React from "react";
import styles from "../style";
import { charity_img } from "../assets";

const Mission = () => (
    <section
        id="mission"
        className={`flex ${styles.paddingY} justify-center items-center`}>
        <div className="absolute z-[0] w-[30%] h-[50%] to left-5 rounded-full " />
        <div className={`flex-col ${styles.flexStart} w-full text-left p-14`}>
            <h1
                className={`${styles.heading2}font-poppins font-light ss:text-[48px] text-[32px] text-white ss:leading-snug leading-[5px] mb-4 z-[10]`}>
                <span className="text-gradient-charkey">
                    Our Sponsor: Action for Humanity
                </span>{" "}
            </h1>

            <div className="flex md:flex-row flex-col items-center mb-4 z-20">
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        src={charity_img} // Replace with the actual path to your image
                        alt="Charityu Img Pic"
                        className="p-8 z-10"
                        style={{
                            width: "54%",
                            marginLeft: "-3rem",
                            marginRight: "-4rem",
                        }}
                    />
                    <div className="text-white ml-4 p-8 z-20">
                        <h3>
                            <span className="text-gradient-charkey font-semibold text-lg">
                                Action For Humanity
                            </span>{" "}
                            (AFH) is a charity providing aid to those affected
                            by natural and man-made disasters worldwide,
                            including Syria, Gaza, and Yemen. <br />
                            <br />
                            They deliver{" "}
                            <span className="text-gradient-charkey font-semibold text-lg">
                                essential supplies
                            </span>{" "}
                            such as food, water, and medical care{" "}
                            <span className="text-gradient-charkey font-semibold text-lg">
                                while focusing on long-term recovery efforts
                            </span>{" "}
                            like education and infrastructure development.
                        </h3>
                        <br />
                        <h3>
                            <span className="text-gradient-charkey font-semibold text-lg">
                                Our problem statements
                            </span>{" "}
                            are guided by AFH experts who identify critical
                            needs on the ground.{" "}
                            <span className="text-gradient-charkey font-semibold text-lg">
                                AFH professionals will provide their expertise
                                during the hackathon and judge your solutions.
                            </span>{" "}
                        </h3>
                        <br />
                        <h3>
                            Promising solutions may be further developed and
                            potentially launched post-hackathon.
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
