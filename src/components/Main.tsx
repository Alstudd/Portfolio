import React from 'react'
import Step from './Step';
import { FaEthereum, FaRobot, FaNotesMedical, FaGithub, FaCheck, FaTimes } from "react-icons/fa";

type Props = {}

const Main = (props: Props) => {
    const steps = [
        {
            name: "Questify AI",
            href: "https://github.com/Alstudd/Questify-AI",
            live: "https://questify-ai.vercel.app/",
            icon: <FaRobot />,
            head: "Questify AI is an",
            type: "AI-integrated web app created with",
            techStack: "Next.js, TypeScript, Prisma, MongoDB and OpenAI LLM.",
            content: "It is an AI Question Generator and Course Generator. It is an all-in-one edtech platform for game based learning and more. A fine tuned OpenAI LLM model is used to get the most accurate results.",
            description:
                "AI Question Generator and Course Generator using Next.js, TypeScript, Prisma, MongoDB and OpenAI LLM.",
        },
        {
            name: "EtherShare",
            href: "https://github.com/Alstudd/EtherShare",
            live: "https://ethershare.vercel.app/",
            icon: <FaEthereum />,
            head: "EtherShare is a",
            type: "React.js, Web 3.0 & ETH (crypto) sharing platform created using",
            techStack: "React.js, Solidity, Ethers.js, Hardhat and Tailwind CSS.",
            content: "It is a basic platform for sharing ETH with friends and family. The web app has a modern and responsive UI design and is built with the latest technologies.",
            description:
                "A basic ETH (crypto) sharing platform using React.js, Solidity, Ethers.js, Hardhat and Tailwind CSS",
        },
        {
            name: "Swasth",
            href: "https://github.com/Alstudd/Health-Web-App-KnowCode",
            live: "https://swasth-flask.onrender.com/",
            icon: <FaNotesMedical />,
            head: "Swasth is a",
            type: "web application hosted on Render made with",
            techStack: "Flask.",
            content: "It consists of an EHR system for a hospital along with healthcare chatbot, disease prediction, face recognition AI, video chat, meditation, insurance facility ads and admin portal. It is a one stop solution for all healthcare needs.",
            description:
                "An all in one health web app using Flask with an EHR system for a hospital along with healthcare chatbot, disease prediction, face recognition AI, video chat, meditation, insurance facility ads and admin portal.",
        },
    ];

    const benefits = [
        {
            metric: "10x",
            name: "a self taught developer",
            description:
                "I am a self-taught developer and I have been coding for over 2 years. I have a strong passion for learning and I am always looking for new ways to improve my skills and expand my knowledge. I started off with HTML, CSS and JavaScript and have since expanded my skills to include a variety of different languages and frameworks.",
        },
        {
            name: "a creative thinker",
            description:
                "I am a creative thinker and I am always looking for new ways to solve problems and create new and innovative solutions. I am driven by a dream to build something new that can bring meaning and value to everyone's lives, and I am eager to collaborate with like-minded individuals to turn this dream into reality",
        },
        {
            name: "a team player",
            description:
                "I have participated in 8+ national level hackathons and emerged as winner at 3 hackathons. I have a strong understanding of the software development lifecycle and I am able to manage and lead a team to deliver high-quality software solutions on time and within budget. I am also a strong communicator and I am able to work effectively with stakeholders at all levels of an organization. I am a strong believer in the power of teamwork and I am always looking for new ways to improve my leadership skills and help my team achieve their goals.",
        },
    ];
    return (
        <div>
            <main className="relative z-[20] flex flex-col flex-1 p-4">
                <section
                    id="introPage"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
                >
                    <div
                        className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
                    >
                        <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
                            Hi! I&apos;m <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Alston</span> Soares
                            <br />Full Stack
                            <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"> Developer</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl">
                            I am a Passionate <span className="text-blue-400 text-extrabold"><strong>Web</strong></span> Developer, <span className="text-blue-400 text-extrabold"><strong>Open Source</strong></span> Contributor and <span className="text-blue-400 text-extrabold"><strong>AI/ML + Blockchain</strong></span> Enthusiast.
                            My <span className="text-blue-400 text-extrabold"><strong> favorite tech</strong></span> includes MERN, Next.js, Prisma, Tailwind CSS, Flask and Python.
                        </p>
                        <a
                            href="https://www.github.com/Alstudd"
                            target="_blank"
                            className="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
                        >
                            <div
                                className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                            />
                            <h4 className="relative z-9">Contact Me &rarr;</h4>
                        </a>
                    </div>
                    <div className="relative shadow-2xl grid place-items-center">
                        <img
                            src="/alston.jpeg"
                            alt="Alstudd"
                            className="object-cover z-[2] max-h-[70vh] rounded-3xl"
                        />
                    </div>
                </section>
                <section className="py-20 lg:py-32 flex flex-col gap-24" id="projects">
                    <div className="flex flex-col gap-2 text-center">
                        <h6 className="text-large sm:text-xl md:text-2xl">
                            Some of my amazing projects.
                        </h6>
                        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                            Excited to <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">view</span> my work?
                        </h3>
                    </div>
                    <a
                        href="https://www.github.com/Alstudd"
                        target="_blank"
                        className="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-blue-700 duration-200"
                    >
                        <FaGithub />
                        <p>View my github</p>
                    </a>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
                        {steps.map((step, index) => (
                            <Step key={index} step={step} />
                        ))}
                    </div>
                </section>
                <section
                    id="about"
                    className="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
                >
                    <div
                        className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-700 py-4"
                    >
                        <h6 className="text-large sm:text-xl md:text-2xl">
                            Want to know more?
                        </h6>
                        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                            A bit <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">about</span> me.
                        </h3>
                    </div>
                    <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
                        I am . . .
                    </p>
                    <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-6 sm:gap-8">
                                <p
                                    className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                                >
                                    0{index + 1}
                                </p>
                                <div className="flex flex-col gap-6 sm:gap-8">
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl">
                                        {benefit.name}
                                    </h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        {/* <h6 className="text-large sm:text-xl md:text-2xl">
                            Qualities that make me stand out.
                        </h6> */}
                        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                            The <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Complete</span> Package
                        </h3>
                    </div>
                    <div
                        className="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
                    >
                        <table className="bg-white text-slate-700 rounded">
                            <thead className="border-b border-solid border-slate-200">
                                <tr className="text-left">
                                    <th>Hi</th>
                                    <th className="">Candidate #1</th>
                                    <th className="">Candidate #2</th>
                                    <th className="">Candidate #3</th>
                                    <th
                                        className="bg-blue-700 text-white"
                                    >Me</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-solid border-slate-200">
                                    <td
                                        className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                    >Dedication</td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaCheck className="text-blue-500" /></td>
                                </tr>
                                <tr className="border-b border-solid border-slate-200">
                                    <td
                                        className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                    >Reliability</td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaCheck className="text-blue-500" /></td>
                                </tr>
                                <tr>
                                    <td
                                        className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                    >Communication Skills</td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaCheck className="text-blue-500" /></td>
                                </tr>
                                <tr className="border-t border-solid border-slate-200">
                                    <td
                                        className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                    >Confidence</td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaCheck className="text-blue-500" /></td>
                                </tr>
                                <tr className="border-t border-solid border-slate-200">
                                    <td
                                        className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                                    >Progamming Ability</td>
                                    <td><FaCheck className="text-slate-500" /></td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaTimes className="text-slate-500" /></td>
                                    <td><FaCheck className="text-blue-500" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mx-auto -mt-12 italic sm:hidden opacity-50">
                        <p>Scroll to see more &rarr;</p>
                    </div>
                    <p className="mx-auto">So why not invest?</p>
                </section>
            </main>
        </div>
    )
}

export default Main