"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  return (
    <div className="relative z-[20] flex flex-col items-center gap-10 justify-center">
      <GitHubCalendar
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
          className="text-center bg-blue-500 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded-l border-2 border-white"
          onClick={() => setYear(year - 1)}
        >
          {`<`}
        </button>
        <button
          disabled={year === currentYear}
          className="text-center bg-blue-500 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded-r border-2 border-white"
          onClick={() => setYear(year + 1)}
        >
          {`>`}
        </button>
      </div>
    </div>
  )
}

export default Github