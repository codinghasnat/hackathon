import React from "react";
import { footerpic } from "./assets";
import styles from "./style";

import {
    Navbar,
    Hero,
    Stats,
    // Business,
    // Billing,
    // CardDeal,
    // Testimonials,
    // Clients,
    // CTA,
    Footer,
    Speakers,
    Panelists,
    CharitySponsor,
    Location,
    Theme,
    Mission,
    Communications,
} from "./components";
import Tickets from "./components/Tickets";

const App = () => {
    return (
        <div className="bg-gradient-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-inherit ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                    <Stats />
                    <Tickets />
                    <Location />
                </div>
            </div>
            <div className={`bg-inherit ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Theme />
                </div>
            </div>
            <div className={`bg-inherit ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Mission />
                </div>
            </div>
            <div className={`bg-inherit ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <CharitySponsor />
                </div>
            </div>

            <div className={`bg-inherit ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Speakers />
                    <Panelists />
                </div>
            </div>
            <div className={`bg-inherit ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Communications />
                </div>
            </div>
            <div
                className={`bg-inherit ${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}
                style={{
                    backgroundImage: `url(${footerpic})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    backgroundPositionY: "0%",
                }}>
                <div className={`${styles.boxWidth}`}>
                    {/* FAQS, Speakers and Sponsors */}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
