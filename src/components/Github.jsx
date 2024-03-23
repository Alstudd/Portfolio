"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {

  const myTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#ffffff','#81d4fa', '#29b6f6', "#039be5", "#0277bd"],
  };
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  return (
    <div className="relative z-[20] flex flex-col items-center gap-10 justify-center">
      <GitHubCalendar
      colorScheme="dark"
        theme={myTheme}
        year={year}
        style={{}}
        username="Alstudd"
        blockSize={15}
        blockMargin={5}
        color="#42a5f5"
        fontSize={16}
      />
      <div className="flex justify-center">
        <button
          disabled={year === new Date("2020").getFullYear()}
          className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 hover:bg-blue-600 font-bold py-0 px-4 rounded-l border-2 border-white"
          onClick={() => setYear(year - 1)}
        >
          {`<`}
        </button>
        <button
          disabled={year === currentYear}
          className="text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 hover:bg-blue-600 font-bold py-0 px-4 rounded-r border-2 border-white"
          onClick={() => setYear(year + 1)}
        >
          {`>`}
        </button>
      </div>
    </div>
  )
}

export default Github