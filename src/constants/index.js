//this has all the text

import {
    people01,
    people02,
    // Panelists
    people03,
    people04,
    people05,
    facebook,
    instagram,
    linkedin,
    twitter,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star,
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "mission",
        title: "Our Mission",
    },
    {
        id: "tickets",
        title: "Tickets",
    },
    // {
    //     id: "faqs",
    //     title: "FAQs",
    // },
    {
        id: "contact",
        title: "Contact",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Rewards",
        content:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Secured",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Balance Transfer",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];

// - Amar Shah (CEO of Wayve - Unicorn Startup, Venture Fund ~ 10Mill)
// - Osman (CEO Omega - AGI LLM startup)
// - Delegate from Techstar (VC)
// - Delegate from Wahed (CEO?)
// - Nina Mohanty (Bloom)
// - Zahid (CEO Buksana - Healthcare LLM startup)

export const speakers = [
    {
        id: "speaker-1",
        content:
            "Raihaan, Co-Founder and CTO of bench_, pioneers AI-driven engineering. With experience at Entrepreneur First and the Karman Space Programme, he merges entrepreneurship and tech to solve challenges, making him a leading figure in AI and aerospace engineering.",
        name: "Raihaan Usman",
        title: "Co-Founder of Bench_ | Problem Solver | Imperial Alumni",
        img: people01, //change to speaker01
        time: "",
    },
    {
        id: "speaker-2",
        content:
            "Moin Bukhari is a dynamic Full Stack Engineer and Co-Founder of Convo, an AI speech-to-speech language tutor. With a Master's in Computer Engineering from Imperial College London, he has led impactful tech projects like Muddakir and Find Your Fit.",
        name: "Moin Bukhari",
        title: "Co-Founder of Convo | Software Engineer | Imperial Alumni",
        img: people02,
        time: "",
    },
];
export const panelists = [
    {
        id: "speaker-1",
        content:
            "Zubair is a highly experienced senior software engineer currently working at Microsoft. graduated from Imperial in 2019 with a MEng in Computing working on the latest features for Microsoft’s products.",
        name: "Zubair Chowdhury",
        title: "Microsoft | Software Engineer | Imperial Alumni",
        img: people04, //change to panelist speaker01
        time: "",
    },
    {
        id: "speaker-2",
        content:
            "Humza, a Senior Software Engineer at Centrica, enhances Energy Trading and Risk Management with Machine Learning. An expert in C# .NET, Azure, microservices, and domain-driven design, he blends complex technologies to solve real-world problems, driving tech innovation.",
        name: "Humza Sheikh",
        title: "ML Specialist | Software Engineer | Imperial Alumni",
        img: people05,
        time: "",
    },
    {
        id: "speaker-3",
        content:
            "Subaan is a doctor and software engineer, currently a Clinical Software Engineer at a healthtech startup. Passionate about leveraging technology in healthcare, his journey at Imperial College London and role at FOSIS showcase his commitment to impactful tech solutions.",
        name: "Subaan Qasim",
        title: "Doctor | Engineer | Imperial Alumni",
        img: people03,
        time: "",
    },
];

export const stats = [
    {
        id: "when",
        title: "10am Sat 22nd June - 4pm Sun 23rd June",
        value: "When? ",
    },
    {
        id: "where",
        title: "Huxley Building",
        subtitle: "Imperial College London",
        value: "Where? ",
    },

    {
        id: "who",
        title: "Determined students like yourself!",
        value: "Who? ",
    },
];

export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Contact",
                link: "mailto:hasnat_chow@outlook.com",
            },
            {
                name: "Explore",
                link: "https://stemmuslims.org/",
            },
            {
                name: "Our Committee",
                link: "https://stemmuslims.org/committee",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Our Linktree",
                link: "https://linktr.ee/stemmuslims",
            },
            {
                name: "Blog",
                link: "https://www.linkedin.com/in/hasnat-chowdhury-b39188242/",
            },
            {
                name: "Newsletters",
                link: "https://forms.office.com/pages/responsepage.aspx?id=B3WJK4zudUWDC0-CZ8PTB_FPR1TjLttGvCjlVkZ9yz9UMTQzTlFGUUpMQkhIQUZaRFFaRVlBWEdPVC4u",
            },
        ],
    },
    {
        title: "Partner",
        links: [
            {
                name: "Action for Humanity",
                link: "https://actionforhumanity.org/",
            },
            {
                name: "Deen Developers",
                link: "https://www.deendevelopers.com/",
            },
            {
                name: "Become a Partner",
                link: "mailto:stemmuslims@hotmail.com",
            },
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/stem.muslims/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/company/stem-muslims-imperial-college-london/",
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];
