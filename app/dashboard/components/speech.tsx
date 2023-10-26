"use client";
import React, { useState, useEffect } from "react";


const Speech = () => {

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center p-2 rounded-sm bg-primary shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      >
        <svg
          fill="#fff"
          height="800px"
          width="800px"
          className=""
          version="1.1"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
        >
          <g>
            <g>
              <path d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z" />
              <path d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute bottom-20 right-8 text-white text-xs">
      Recognized Text: 
      </div>
    </div>
  );
};

export default Speech;
