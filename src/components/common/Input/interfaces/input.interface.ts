import { ChangeEvent } from "react";

export interface IInput {
  title: string;
  type: string;
  placeholder: string;
  value: string;
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
}
