import { Option } from "./Prompt";

export type Answer = {
  id: string;
  promptId: string;
  options: Option[];
};
