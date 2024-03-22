import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer
            className="relative z-[20] py-20 sm:py-32 border-t border-solid border-blue-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
        >
            <p className="px-4 py-2 bg-white text-slate-950 font-medium">
                Connect with me &darr;
            </p>
            <div className="flex flex-col gap-4 items-center justify-center">
                <p className='text-white'><b className="pr-2">Email</b> alstonsoares17@gmail.com</p>
                <p>
                    <b className="pr-2 text-white">GitHub</b>
                    <a href="https://www.github.com/Alstudd" target="_blank" className="text-blue-400"
                    >Alstudd<sup className=""
                    ><span className="text-xs scale-75 pl-0.5"
                    ><i
                                    className="text-blue-400 fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
                                /></span></sup></a>
                </p>
                <p>
                    <b className="pr-2 text-white">LinkedIn</b>
                    <a href="https://www.linkedin.com/in/alston-soares-724a641b9/" target="_blank" className="text-blue-400"
                    >Alston Soares<sup className=""
                    ><span className="text-xs scale-75 pl-0.5"
                    ><i
                                    className="text-blue-400 fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
                                /></span></sup></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer