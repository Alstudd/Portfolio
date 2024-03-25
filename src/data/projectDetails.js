import { FaEthereum, FaRobot, FaNotesMedical, FaLink, FaMoneyCheck, FaMoneyBill, FaShoppingCart, FaPiggyBank, FaTerminal } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const projectDetails = [
    {
        name: "Questify AI",
        href: "https://github.com/Alstudd/Questify-AI",
        live: "https://questify-ai.netlify.app/",
        mainImg: "/projects/questify.png",
        icon: <FaRobot />,
        head: "Questify AI is an",
        type: "AI-integrated web app created with",
        techStack: "Next.js, TypeScript, Prisma, MongoDB and OpenAI LLM.",
        content: "It is an AI Question Generator and Course Generator. It is an all-in-one edtech platform for game based learning and more.",
        description:
            "AI Question Generator and Course Generator using Next.js, TypeScript, Prisma, MongoDB and OpenAI LLM.",
    },
    {
        name: "EtherShare",
        href: "https://github.com/Alstudd/EtherShare",
        live: "https://ethershare.vercel.app/",
        mainImg: "/projects/ethershare.png",
        icon: <FaEthereum />,
        head: "EtherShare is a",
        type: "React.js, Web 3.0 & ETH (crypto) sharing platform created using",
        techStack: "React.js, Solidity, Ethers.js, Hardhat and Tailwind CSS.",
        content: "It is a basic web3.0 platform for sharing ETH with anyone in the world.",
        description:
            "A basic ETH (crypto) sharing platform using React.js, Solidity, Ethers.js, Hardhat and Tailwind CSS",
    },
    {
        name: "Swasth",
        href: "https://github.com/Alstudd/Health-Web-App-KnowCode",
        // live: "https://swasth-flask.onrender.com/",
        mainImg: "/projects/swasth.png",
        icon: <FaNotesMedical />,
        head: "Swasth is a",
        type: "web application made with",
        techStack: "Flask.",
        content: "It has an EHR system for a hospital along with healthcare chatbot, disease prediction, face recognition AI, video chat, meditation, insurance facility ads and admin portal.",
        description:
            "An all in one health web app using Flask with an EHR system for a hospital along with healthcare chatbot, disease prediction, face recognition AI, video chat, meditation, insurance facility ads and admin portal.",
    },
    {
        name: "Financify",
        href: "https://github.com/Alstudd/Expense-Tracker-Web-App",
        live: "https://financify-cod.netlify.app/",
        mainImg: "/projects/financify.png",
        icon: <FaPiggyBank />,
        head: "Financify is a",
        type: "web app created with",
        techStack: "React.js and React Router.",
        content: "It is an Expense Tracker and Financial Planner. It helps you keep track of your expenses and plan your finances. Financify is your Budget Buddy.",
        description:
            "Your Budget Buddy, Expense Tracker and Financial Planner.",
    },
    {
        name: "COMP-C",
        href: "https://github.com/Alstudd/SE-COMP-C-Website",
        live: "https://tcet-se-comp-c.netlify.app/",
        mainImg: "/projects/tcet-se-comp-c.png",
        icon: <FaLink />,
        head: "COMP-C is a",
        type: "website built with",
        techStack: "React and Tailwind CSS.",
        content: "It is a website that showcases the achivements of the SE COMP C batch of TCET. This website also provides the resources and opportunities needed for our academic growth.",
        description:
            "TCET SE COMP C Website using React and Tailwind CSS.",
    },
    {
        name: "Alstazon",
        href: "https://github.com/Alstudd/ecommerce-nextjs",
        live: "ecommerce-nextjs-alston.vercel.app",
        mainImg: "/projects/alstazon.png",
        icon: <FaShoppingCart />,
        head: "Alstazon is an",
        type: "e-commerce platform created using",
        techStack: "Next.js, TypeScript, Prisma, MongoDB and Zod.",
        content: "It is an e-commerce platform with a focus on user experience, security and authentication provided by NextAuth.",
        description:
            "A basic ETH (crypto) sharing platform using React.js, Solidity, Ethers.js, Hardhat and Tailwind CSS",
    },
    {
        name: "Betcrypt",
        href: "https://github.com/Alstudd/Crypto-Opinion-Trading-Web3.0",
        live: "https://betcrypt-cw.vercel.app",
        mainImg: "/projects/betcrypt.png",
        icon: <FaMoneyBill />,
        head: "Betcrypt is a",
        type: "web app made with",
        techStack: "React.js, Web3.js, Solidity, Hardhat and Tailwind CSS.",
        content: "It is a 1-1 betting platform for cryptocurrencies (Crypto Opinion Trading). It is a platform for betting on any topic.",
        description:
            "1-1 crypto betting platform using React.js, Web3.js, Solidity, Hardhat and Tailwind CSS.",
    },
    {
        name: "Terminal Portfolio",
        href: "https://github.com/Alstudd/Terminal-Portfolio",
        live: "https://alston-terminal.vercel.app",
        mainImg: "/projects/terminal-portfolio.png",
        icon: <FaTerminal />,
        head: "This is my",
        type: "terminal portfolio made with",
        techStack: "React.",
        content: "It is a terminal portfolio that showcases my projects, skills and contact information. It is a fun and interactive way to view my portfolio.",
        description:
            "Terminal Portfolio using React.",
    },
];

export default projectDetails;