export interface InitialStateValues {
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
  flexWrap: string;
  elementsAmount: number;
}

export interface InputsFieldProps {
  inputVal: InitialStateValues;
  setInputVal: React.Dispatch<React.SetStateAction<InitialStateValues>>;
}

export interface ElementsBoardProps {
  inputVal: InitialStateValues;
}

export interface StyleProperties {
  justifyContent: string;
  alignItems: string;
  flexDirection: string,
  flexWrap: string;
}