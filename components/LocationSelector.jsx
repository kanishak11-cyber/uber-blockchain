import React, { useState } from "react";

const style = {
  wrapper: `pt-2`,
  searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
  inputBoxes: ` flex flex-col mb-4 relative`,
  inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
  foucusedInputBox: `border-black`,
  svgContainer: `mx-1`,
  verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent w-full h-full`,
};

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState("to");
  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus === "from" ? "Where can we pick you up?" : "Where To?"}
      </div>
      <div className={style.inputBoxes}>
        <div
          className={`${style.inputBox} ${
            inFocus === "from" ? style.foucusedInputBox : ""
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input className={style.input} placeholder='Enter the pickup location' />
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
