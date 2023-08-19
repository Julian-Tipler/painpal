import { Option } from "./prompt";

export type Answer = {
  id: string;
  promptId: string;
  options: Option[];
};
