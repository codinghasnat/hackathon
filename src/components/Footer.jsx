import styles from "../style";
import { logo, footerpic } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section
        className={`${styles.flexCenter} ${styles.paddingY} flex-col px-10`}>
        <div className={`${styles.flexStart} md:flex-row mb-8 px-10 w-full`}>
            <div className="flex-1 flex flex-col justify-start mr-10">
                <p className={`${styles.paragraph} mt-4 w-[200px]`}></p>
                <img
                    src={logo}
                    alt="HaqqLogo"
                    className="w-[266px] h-[150px] object-contain"
                />
            </div>
            <div className="flex-[1.5[ w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink) => (
                    <div
                        key={footerLink.key}
                        className="flex flex-col ss:my-0 my-4 min-w-[150px] font-bold text-[20px] text-teal-300">
                        <h4>{footerLink.title}</h4>
                        <ul>
                            {footerLink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading[20px] text-dimWhite 
                                    hover:text-secondary cursor-pointer 
                                    ${
                                        index !== footerLink.links.length - 1
                                            ? "mb-1"
                                            : "mb-0"
                                    }`}>
                                    <a
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-col flex-col pt-6 border-t-[1px] border-stone-100">
            <div className="flex flex-row md:mt-2 mt-6">
                {socialMedia.map((social, index) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                                index < socialMedia.length - 1 ? "mr-4" : ""
                            }`}
                        />
                    </a>
                ))}
            </div>

            <p className="font-poppins font-normal text-center text-[11px] leading-[27px] text-stone-100">
                © 2023 Hasnat Chowdhury. All Rights Reserved
            </p>
        </div>
    </section>
);

export default Footer;
