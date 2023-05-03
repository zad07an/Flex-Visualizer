import { ChangeEvent } from "react";

export type TypeSelectOnChage = (
  e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
) => void;

export type TypeHandleCopy = (text: string) => void