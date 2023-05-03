import { FC, useState } from "react";
import { InitialStateValues } from "./utils/interface";
import InputsField from "./components/InputsField";
import ElemetsBoard from "./components/ElemetsBoard";
import Navbar from "./components/Navbar";
import ShowCSS from "./components/ShowCSS";

const initialState: InitialStateValues = {
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "row",
  flexWrap: "nowrap",
  elementsAmount: 1,
};

const App: FC = () => {
  const [inputVal, setInputVal] = useState(initialState);

  return (
    <div>
      <Navbar />
      <InputsField inputVal={inputVal} setInputVal={setInputVal} />
      <div className=" w-full px-[120px] pt-10 pb-5 grid grid-cols-[2fr_1fr] gap-10">
        <ElemetsBoard inputVal={inputVal} />
        <ShowCSS inputVal={inputVal}/>
      </div>
    </div>
  );
};

export default App;
