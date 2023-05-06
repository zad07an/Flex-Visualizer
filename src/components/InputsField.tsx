import React from "react";
import { flexData } from "../data/flext-data";
import { InputsFieldProps } from "../utils/interface";
import { TypeSelectOnChage } from "../utils/types";

const InputsField: React.FC<InputsFieldProps> = ({ inputVal, setInputVal }) => {
  const handleSelectOnChange: TypeSelectOnChage = (e) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className=" w-full px-[60px] pt-5 flex items-center flex-col gap-10">
      <div className=" w-full flex flex-col items-center gap-2">
        <div>
          <p>Number of elements</p>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <input
            type="number"
            name="elementsAmount"
            value={inputVal?.elementsAmount}
            onChange={handleSelectOnChange}
            placeholder="How many elements do you want?"
            className=" w-[300px] px-2 border-2 border-blue-600 h-[40px] rounded-md outline-0 focus:border-red-600 transition-all"
            min={1}
            max={15}
          />
          {inputVal?.elementsAmount > 15 ? (
            <span className=" text-red-500">
              Maximum number of elements should be 15
            </span>
          ) : inputVal?.elementsAmount < 1 ? (
            <span className=" text-red-500">
              Minimum number of elements should be 1
            </span>
          ) : null}
        </div>
      </div>
      <div className=" w-full grid grid-cols-5 place-items-center">
        <div className=" flex flex-col items-start gap-2">
          <div>
            <p className=" text-lg text-gray-500 font-medium">Flex</p>
          </div>
          <select
            name=""
            className=" border-2 border-blue-600 w-[160px] h-[40px] rounded-md cursor-pointer focus:border-red-600 transition-all"
          >
            <optgroup>
              <option value="" selected>
                Flex
              </option>
            </optgroup>
          </select>
        </div>
        <div className=" flex flex-col items-start gap-2">
          <div>
            <p className=" text-lg text-gray-500 font-medium">
              Justify Content
            </p>
          </div>
          <select
            name="justify"
            className=" border-2 border-blue-600 w-[160px] h-[40px] rounded-md cursor-pointer focus:border-red-600 transition-all"
            onChange={handleSelectOnChange}
          >
            <optgroup>
              <option value="flex-start" selected>
                Flex-Start
              </option>
              {flexData?.justify?.slice(1)?.map((item) => {
                return (
                  <option key={item?.id} value={item?.value}>
                    {item?.title}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
        <div className=" flex flex-col items-start gap-2">
          <div>
            <p className=" text-lg text-gray-500 font-medium">Align Items</p>
          </div>
          <select
            name="align"
            className=" border-2 border-blue-600 w-[160px] h-[40px] rounded-md cursor-pointer focus:border-red-600 transition-all"
            onChange={handleSelectOnChange}
          >
            <optgroup>
              <option value="flex-start" selected>
                Flex-Start
              </option>
              {flexData?.align?.slice(1)?.map((item) => {
                return (
                  <option key={item?.id} value={item?.value}>
                    {item?.title}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
        <div className=" flex flex-col items-start gap-2">
          <div>
            <p className=" text-lg text-gray-500 font-medium">Flex Direction</p>
          </div>
          <select
            name="direction"
            className=" border-2 border-blue-600 w-[160px] h-[40px] rounded-md cursor-pointer focus:border-red-600 transition-all"
            onChange={handleSelectOnChange}
          >
            <optgroup>
              <option value="row" selected>
                Row
              </option>
              {flexData?.direction?.slice(1)?.map((item) => {
                return (
                  <option key={item?.id} value={item?.value}>
                    {item?.title}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
        <div className=" flex flex-col items-start gap-2">
          <div>
            <p className=" text-lg text-gray-500 font-medium">Flex Wrap</p>
          </div>
          <select
            name="wrap"
            className=" border-2 border-blue-600 w-[160px] h-[40px] rounded-md cursor-pointer focus:border-red-600 transition-all"
            onChange={handleSelectOnChange}
          >
            <optgroup>
              <option value="nowrap" selected>
                No-Wrap
              </option>
              {flexData?.wrap?.slice(1)?.map((item) => {
                return (
                  <option key={item?.id} value={item?.value}>
                    {item?.title}
                  </option>
                );
              })}
            </optgroup>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputsField;
