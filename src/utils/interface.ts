export interface InitialStateValues {
  justify: string;
  align: string;
  direction: string;
  wrap: string;
  elementsAmount: number;
}

export interface FlexData {
  justify: {id: number, title: string, value: string}[];
  align: {id: number, title: string, value: string}[];
  direction: {id: number, title: string, value: string}[];
  wrap: {id: number, title: string, value: string}[];
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