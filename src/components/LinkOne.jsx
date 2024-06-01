import styles from "../style";

const LinkOne = () => (
    <a
        // This is the Google Form
        href="https://forms.gle/8HZRDdeszk7PngqH6"
        target="_blank"
        rel="noopener noreferrer">
        <div
            className={`${styles.flexCenter} w-[160px] h-[60px] rounded-3xl 
  shadow-lg p-[2%] cursor-pointer rotate-on-hover`}>
            <div
                className={`${styles.flexCenter} w-[100%] h-[100%] rounded-3xl 
    shadow-lg border-4`}
                style={{ borderColor: "#FF0000" }}>
                <p className="font-poppins font-medium text-20px leading-[30px] text-white">
                    <span>Sign Up Now!</span>
                </p>
            </div>
        </div>
    </a>
);

export default LinkOne;
