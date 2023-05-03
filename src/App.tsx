import { FC, useState } from "react";
import { InitialStateValues } from "./utils/interface";
import InputsField from "./components/InputsField";
import ElemetsBoard from "./components/ElemetsBoard";
import Navbar from "./components/Navbar";

const initialState: InitialStateValues = {
  justify: "",
  align: "",
  direction: "",
  wrap: "",
  elementsAmount: 1,
};

const App: FC = () => {
  const [inputVal, setInputVal] = useState(initialState);

  return (
    <div>
      <Navbar />
      <InputsField inputVal={inputVal} setInputVal={setInputVal} />
      <ElemetsBoard inputVal={inputVal} />
    </div>
  );
};

export default App;
