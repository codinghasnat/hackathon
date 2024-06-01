import styles from "../style";

const LinkThree = () => (
    <a
        // This is the Discord Srv
        href="https://discord.gg/sba2ygsnKX"
        target="_blank"
        rel="noopener noreferrer">
        <div
            className={`${styles.flexCenter} w-[160px] h-[60px] rounded-3xl 
  shadow-lg p-[2%] cursor-pointer glow-on-hover`}>
            <div
                className={`${styles.flexCenter} w-[100%] h-[100%] rounded-3xl 
    shadow-lg border-4`}
                style={{ borderColor: "#00befe" }}>
                <p className="font-poppins font-medium text-20px leading-[30px] text-white">
                    <span>Join the Server</span>
                </p>
            </div>
        </div>
    </a>
);

export default LinkThree;
