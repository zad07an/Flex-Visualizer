import React from "react";
import { ElementsBoardProps, StyleProperties } from "../utils/interface";

const ElemetsBoard: React.FC<ElementsBoardProps> = ({ inputVal }) => {
  const elements = [];

  if (inputVal.elementsAmount >= 1 && inputVal.elementsAmount <= 15) {
    for (let i = 1; i <= Number(inputVal?.elementsAmount); i++) {
      elements.push(i);
    }
  }

  const styles: StyleProperties = {
    'justifyContent': `${inputVal?.justify}`,
    'alignItems': `${inputVal?.align}`,
    'flexDirection': `${inputVal?.direction}`,
    'flexWrap': `${inputVal?.wrap}`,
  };

  return (
    <div className=" overflow-hidden">
      <div
        className="  min-h-[400px] flex border-2 rounded-md border-gray-300 transition-all"
        style={styles as React.CSSProperties}
      >
        {elements?.map((element, index) => {
          return (
            <div
              key={index}
              className=" w-[120px] h-[120px] rounded-md bg-blue-500 transition-all flex items-center justify-center"
            >
              <p className=" text-2xl text-white">{element}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElemetsBoard;
