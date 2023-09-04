import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
    <section
        className={`${styles.flexCenter}
    flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
            <div
                key={stat.id}
                className={`flex-1 flex justify-start items-center flex-row m-3 z-10 p-1`}>
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[40px] leading-[43px] text-white">
                    {stat.value}
                </h4>
                <div>
                    <p className="font-poppins xs:text-[20px] font-bold text-[15px] xs:leading-[18px] leading-[21px] text-gradient-keykey p-2 py-1">
                        {stat.title}
                    </p>
                    {stat.subtitle && (
                        <p className="font-poppins font-semibold xs:text-[15px] text-[12px] xs:leading-[16px] leading-[18px] text-gradient-keykey p-2">
                            {stat.subtitle}
                        </p>
                    )}
                </div>
            </div>
        ))}
    </section>
);

export default Stats;
