import React, { useState, useEffect } from "react";

const Location = () => {
    const [countdown, setCountdown] = useState("0d 0h 0m 0s");

    useEffect(() => {
        const hackathonDate = new Date("2024-06-22T09:00:00");
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = hackathonDate - currentTime;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="location-container">
            <div className="left-panel z-10 flex flex-col items-center justify-center h-full">
                <h1
                    className="font-bold text-gradient-TheCountdown text-[32px]
        ss:leading-snug leading-[30px] md:text-[37px] md:leading-[50px] 
        xl:text-[32px] xl:leading-60px mt-4 mb-4 text-center">
                    The Countdown
                </h1>
                <div
                    className="countdown font-bold text-gradient-TheCountdown text-[20px]
        ss:leading-snug leading-[18px] md:text-[20px] md:leading-[30px] 
        xl:text-[16px] xl:leading-40px mt-4 mb-4 text-center">
                    {countdown}
                </div>
            </div>
            <div
                className="absolute items-center transform translate-y-16 translate-x-20 justify-center z-[3] w-[70%] h-[30%]
        rounded-full whites__gradient"
            />
            <div className="map-container">
                <iframe
                    className="map-iframe z-10"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Huxley%20Building,%20180%20Queen's%20Gate,%20South%20Kensington,%20London%20SW7%202AZ&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                    loading="lazy"
                    title="Google Map Location"></iframe>
            </div>
        </div>
    );
};

export default Location;
