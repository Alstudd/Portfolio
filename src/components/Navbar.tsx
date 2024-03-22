import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const tabs = [
        { name: "Projects ", link: "#projects" },
        { name: "About me", link: "#about" },
        { name: "Blog", link: "https://www.github.com/Alstudd" },
        // { name: "Contact", link: "" },
        // {name: '', link: ''},
    ];
  return (
    <div>
        <header
    className={"text-white sticky z-[20] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (false
            ? " py-4 bg-slate-950 border-violet-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 className="font-medium">
        <b className="font-bold poppins">Alston</b> <span className="">Soares</span>
    </h1>
    <div className="sm:flex items-center gap-4 hidden">
        {tabs.map((tab, index) => (
            <a
            key={index}
                href={tab.link}
                className="duration-200 hover:text-violet-400"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        ))
        }
        <a href="https://www.github.com/Alstudd" target="_blank"
            className="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
            <div
                className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 className="relative z-9">Get in touch</h4>
        </a>
    </div>
</header>
    </div>
  )
}

export default Navbar