import { FaEthereum, FaRobot, FaNotesMedical, FaLink, FaMoneyCheck, FaMoneyBill, FaShoppingCart, FaPiggyBank, FaTerminal, FaStar, FaBook, FaPython, FaBuilding, FaVideo, FaBrain, FaPlane, FaHospital, FaThinkPeaks, FaDatabase } from "react-icons/fa";
import { FaComputer, FaMessage, FaPerson, FaShield } from "react-icons/fa6";

const projectDetails = [
    {
        name: "Questify AI",
        href: "https://github.com/Alstudd/Questify-AI",
        live: "https://questify-ai.netlify.app/",
        devfolio: "https://devfolio.co/projects/questify-873f",
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
            "A basic ETH (crypto) sharing platform using React.js, Solidity, Ethers.js, Hardhat and Tailwind CSS.",
    },
    {
        name: "Swasth",
        href: "https://github.com/Alstudd/Health-Web-App-KnowCode",
        // live: "https://swasth-flask.onrender.com/",
        devfolio: "https://devfolio.co/projects/swasth-an-allinone-health-app-652a",
        mainImg: "/projects/swasth.png",
        icon: <FaNotesMedical />,
        head: "Swasth is a",
        type: "web application made with",
        techStack: "Flask, Python, HTML, CSS, JavaScript, Bootstrap, SQLite and SQLAlchemy.",
        content: "It has an EHR system for a hospital along with healthcare chatbot, disease prediction, face recognition AI, video chat, meditation, insurance facility ads and admin portal.",
        description:
            "An all in one health web app using Flask with an EHR system for a hospital along with healthcare chatbot, disease prediction, face recognition AI, video chat, meditation, insurance facility ads and admin portal.",
    },
    {
        name: "Custom Data Chatbot",
        href: "https://github.com/Alstudd/Custom-AI-ChatBot",
        live: "https://custom-data-chatbot.vercel.app",
        mainImg: "/projects/custom-data-chatbot.png",
        icon: <FaDatabase />,
        head: "This is a",
        type: "AI web app made using",
        techStack: "Next.js, OpenAI vector embedding model (text-embedding-ada-002), Pinecone DB, MongoDB Prisma and Clerk.",
        content: "It is a custom data chatbot that can be used for any purpose. It is a chatbot that can be trained on any data.",
        description:
            "Custom Data Chatbot using Next.js, OpenAI vector embedding model (text-embedding-ada-002), Pinecone DB, MongoDB Prisma and Clerk.",
    },
    {
        name: "LearnBlocks",
        href: "https://github.com/Alstudd/Codeshastra_PaypalMafia",
        // live: "https://",
        devfolio: "https://devfolio.co/projects/learnblocks-e2ad",
        mainImg: "/projects/learnblocks.jpeg",
        icon: <FaPerson />,
        head: "LearnBlocks is a",
        type: "decentralized education platform created using",
        techStack: "React D3, Firebase, Next.js, TypeScript, Prisma MongoDB, OpenAI LLM, Vercel AI SDK (Langchain), Pinecone and Plasmo.",
        content: "It is a platform for students to learn, grow and buy courses using ETH transactions.",
        description:
            "Static webpage made using React.js and Tailwind CSS.",
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
    {
        name: "3D AI Teacher",
        href: "https://github.com/Alstudd/3D-AI-Teacher",
        live: "http://thinklabs-ai-teacher.vercel.app",
        mainImg: "/projects/3d-ai-teacher.png",
        icon: <FaVideo />,
        head: "This is an",
        type: "AI integrated web app made using",
        techStack: "Three.js, Next.js, OpenAI and Blender Models.",
        content: "It is a 3D AI Teacher that teaches you about various topics. For now, it can teach japanese to users along with grammar and vocabulary.",
        description:
            "3D AI Teacher using Three.js, Next.js, OpenAI and Blender Models.",
    },
    {
        name: "Public Square",
        href: "https://github.com/Alstudd/Recursion5-PaypalMafia",
        live: "https://public-square-dev.vercel.app/",
        mainImg: "/projects/public-square.png",
        icon: <FaBook />,
        head: "Public Square is a",
        type: "dApp made using",
        techStack: "React, Firebase, Solidity, Ethers.js, Polygon, Hardhat, Flask and Python.",
        content: "It is a Decentralized Web App for Complaint Management.",
        description:
            "Decentralized Web App for Complaint Management using React, Firebase, Solidity, Ethers.js, Polygon, Hardhat, Flask and Python.",
    },
    {
        name: "OptiPick",
        href: "https://github.com/Alstudd/OptiPick",
        // live: "https://optipick.vercel.app/",
        mainImg: "/projects/optipick.png",
        icon: <FaStar />,
        head: "OptiPick is a",
        type: "web app and chrome extension made using",
        techStack: "React, Plasmo (for chrome extension), Express, Python, Azure and Gemini API.",
        content: "It provides sentimental analysis of amazon customer reviews for any product link.",
        description:
            "Sentimental Analysis of Amazon Customer Reviews of any product (Web App + Chrome Extension).",
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
        name: "ThinkLabs",
        href: "https://github.com/Alstudd/Think-Labs",
        // live: "",
        devfolio: "https://devfolio.co/projects/thinklabs-e611",
        mainImg: "/projects/thinklabs.jpeg",
        icon: <FaBrain />,
        head: "ThinkLabs is a",
        type: "website built with",
        techStack: "Next.js and Tailwind CSS.",
        content: "It is a website made for students and teachers to learn and teach in a personalized way.",
        description:
            "ThinkLabs Website using Next.js and Tailwind CSS.",
    },
    {
        name: "Alstazon",
        href: "https://github.com/Alstudd/ecommerce-nextjs",
        live: "https://ecommerce-nextjs-alston.vercel.app/",
        mainImg: "/projects/alstazon.png",
        icon: <FaShoppingCart />,
        head: "Alstazon is an",
        type: "e-commerce platform created using",
        techStack: "Next.js, TypeScript, Prisma, MongoDB and Zod.",
        content: "It is an e-commerce platform with a focus on user experience, security and authentication provided by NextAuth.",
        description:
            "E-Commerce Platform using Next.js, TypeScript, Prisma, MongoDB and Zod.",
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
    // {
    //     name: "Sarthaki",
    //     href: "https://github.com/Alstudd/Sarthaki",
    //     live: "https://sarthaki-v1-0.vercel.app/",
    //     mainImg: "/projects/sarthaki.png",
    //     icon: <FaShield />,
    //     head: "Sarthaki is a",
    //     type: "web app made using",
    //     techStack: "React, Tailwind CSS, Firebase, Python and TDL (Tally Definition Language).",
    //     content: "It provides MIS reports, dashboard to users of an accounting firm stored in our Firebase database. This was a project for a client.",
    //     description:
    //         "MIS Reports and Dashboard for an accounting firm using React, Tailwind CSS, Firebase, Python and TDL (Tally Definition Language).",
    // },
    {
        name: "Medinova",
        href: "https://github.com/AlvinDHacker/Error_404_BroCodeEx_Medinova/tree/alston",
        // live: "https://medinova.onrender.com/",
        devfolio: "https://devfolio.co/projects/medinova-fcee",
        mainImg: "/projects/medinova.jpeg",
        icon: <FaHospital />,
        head: "Medinova is a",
        type: "web app built using",
        techStack: "Flask",
        content: "It is a hospital management system that provides services like booking appointments, viewing reports, etc. It also has a chatbot for answering queries. It was a prototype made for Swasth (final project).",
        description:
            "Hospital Management System using Flask, Python, HTML, CSS, JavaScript, Bootstrap and SQLite.",
    },
    {
        name: "Hawkeye CV",
        href: "https://github.com/Alstudd/ANPR-Model",
        // live: "https://anpr-model.onrender.com/",
        devfolio: "https://devfolio.co/projects/hawkeye-computer-vision-e9d1",
        mainImg: "/projects/anpr-model.png",
        icon: <FaPython />,
        head: "Hawkeye CV is an",
        type: "ANPR model made using",
        techStack: "OpenCV, Python, Flask, EasyOCR and SQLAlchemy",
        content: " for detecting and extracting number plates from videos, images and live camera feed.",
        description:
            "ANPR Model made using OpenCV, Python, Flask, EasyOCR and SQLAlchemy.",
    },
    {
        name: "Bubble Chat",
        href: "https://github.com/Alstudd/Bubble-Chat",
        live: "https://bubble-chat-alstudd.netlify.app",
        mainImg: "/projects/video-chat.png",
        icon: <FaMessage />,
        head: "Bubble Chat is a",
        type: "website made using",
        techStack: "HTML5, CSS3, JavaScript and WebRTC.",
        content: "I used Agora.io SDK for real-time chat feature.",
        description:
            "Video Chat Application using HTML5, CSS3, JavaScript and WebRTC.",
    },
    {
        name: "Object Detection Model",
        href: "https://github.com/Alstudd/Object-Detection-Model",
        // live: "https://video-chat-alstudd.netlify.app/",
        mainImg: "/projects/object-detection-model.png",
        icon: <FaComputer />,
        head: "This is an",
        type: "object detection model made using",
        techStack: "Flask, Python, Yolov5 and PostgreSQL DB.",
        content: "It detects objects in images and videos. It is a model that can be used for security purposes.",
        description:
            "Object Detection Model using Flask, Python, Yolov5 and PostgreSQL DB.",
    },
    {
        name: "TravelBuddy",
        href: "https://github.com/rahulsingh2312/rubix24_team-zeus",
        live: "https://travel-buddyrubix.vercel.app/",
        devfolio: "https://devfolio.co/projects/travelbuddy-0909",
        mainImg: "/projects/travel-buddy.png",
        icon: <FaPlane />,
        head: "TravelBuddy is a",
        type: "MERN Stack web app made using",
        techStack: "React, Node.js, Express.js, MongoDB, Tailwind CSS, GCloud APIs and TripAdvisor API.",
        content: "It is a travel planner and guide for users. It provides information about places to visit, hotels to stay and restaurants to eat.",
        description:
            "Travel Planner and Guide using MERN Stack.",
    },
    {
        name: "Dream Avenue",
        href: "https://github.com/Alstudd/Hacks24-Tech-Tietans",
        // live: "https://video-chat-alstudd.netlify.app/",
        mainImg: "/projects/dream-avenue2.png",
        icon: <FaBuilding />,
        head: "Dream Avenue is a",
        type: "Decentralized Real Estate Web App (Estate Chain) made using",
        techStack: "React, Tailwind, Firebase, Solidity, Polygon, Hardhat and Alchemy.",
        content: "User can sell, buy and list properties on the Polygon Network.",
        description:
            "Decentralized Real Estate Web App (Estate Chain) using React, Tailwind, Firebase, Solidity, Polygon, Hardhat and Alchemy.",
    },
    {
        name: "WeWomen",
        href: "https://github.com/Alstudd/WeWomen",
        live: "https://wewomen.netlify.app/",
        mainImg: "/projects/wewomen.png",
        icon: <FaPerson />,
        head: "WeWomen is a",
        type: "static webpage made using",
        techStack: "React.js and Tailwind CSS.",
        content: "It was a project made to empower women worldwide. It is a comprehensive solution created to empower women by tackling the problems they encounter every day.",
        description:
            "Static webpage made using React.js and Tailwind CSS.",
    },
];

export default projectDetails;