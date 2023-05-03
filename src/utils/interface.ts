export interface InitialStateValues {
  justify: string;
  align: string;
  direction: string;
  wrap: string;
  elementsAmount: number;
}

export interface InputsFieldProps {
  inputVal: InitialStateValues;
  setInputVal: React.Dispatch<React.SetStateAction<InitialStateValues>>;
}

export interface ElementsBoardProps {
  inputVal: InitialStateValues;
}
