import Link from 'next/link'
import React from 'react'

type Props = {}

const Step = ({step}: Props & { step: any }) => {
  return (
    <div className='p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-blue-700 text-center cursor-pointer group hover:border-blue-400 duration-200'>
        <a
    href={step.href}
    target="_blank"
    className="flex flex-col gap-4"
>
    <div
        className="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        {step.icon}
    </div>
    <h3 className="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
    </h3>
    <p>{step.head} {step.type}<strong className="text-blue-400"> {step.techStack}</strong> {step.content}</p>
</a>
    <div className="flex-1 flex justify-betweeen gap-4 items-end">
        <div
            className="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
            <a href={step.live} target='_blank'>View Live &rarr;</a>
        </div>
    </div>
    </div>
  )
}

export default Step