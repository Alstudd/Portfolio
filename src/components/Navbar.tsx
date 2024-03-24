import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

type Props = {};

const Navbar = ({ y }: Props & { y: any }) => {
    const tabs = [
        { name: "Projects", link: "#projects" },
        { name: "About me", link: "#about" },
        { name: "Blog", link: "https://www.github.com/Alstudd" },
        // { name: "Contact", link: "" },
        // { name: '', link: '' },
    ];

    return (
        <div>
            <header className={"text-white fixed z-50 top-0 w-full px-6 py-4 flex items-center justify-between border-b border-solid " +
                (y > 0
                    ? " py-4 bg-slate-950 border-blue-950"
                    : " py-6 bg-transparent border-transparent")}>
                <h1 className="font-medium">
                    <b className="font-bold poppins">Alston</b> <span className="">Soares</span>
                </h1>
                <div className="sm:flex items-center gap-4 hidden">
                    {tabs.map((tab, index) => (
                        <a
                            key={index}
                            href={tab.link}
                            className="duration-200 hover:text-blue-400"
                            target={index === 2 ? "_blank" : ""}
                        >
                            <p>{tab.name}</p>
                        </a>
                    ))}
                    <a href="mailto:alstonsoares17@gmail.com"
                        className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
                    >
                        <div
                            className="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                        />
                        <h4 className="relative z-9 flex items-center gap-3"><AiOutlineMail /> Contact Me</h4>
                    </a>
                </div>
            </header>
            {/* Add your content below the header */}
        </div>
    );
};

export default Navbar;
