import React, { useState } from "react";
import { ElementsBoardProps } from "../utils/interface";
import { TypeHandleCopy } from "../utils/types";

const ShowCSS: React.FC<ElementsBoardProps> = ({ inputVal }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy: TypeHandleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const cssCode = `
    .container {
      display: flex;
      justify-content: ${inputVal?.justify};
      align-items: ${inputVal?.align};
      flex-direction: ${inputVal?.direction};
      flex-wrap: ${inputVal?.wrap};
    }
  `;

  return (
    <div className=" h-max pb-4 bg-blue-600 rounded-md">
      <div className=" w-full px-4 pt-4 flex items-center justify-between">
        <div>
          <p className=" text-xl text-white font-medium">Copy CSS Code here!</p>
        </div>
        <div>
          <button
            className=" px-6 py-1 bg-white text-blue-600 rounded-sm uppercase font-medium"
            onClick={() => handleCopy(cssCode)}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div>
        <pre className=" font-mono text-white">{cssCode}</pre>
      </div>
    </div>
  );
};

export default ShowCSS;
