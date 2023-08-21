import { Prompt } from "../../../../entities/Prompt";

export const handleOptionSelect = ({
  prompt,
  setAnswers,
  option,
}: {
  prompt: Prompt;
  setAnswers: React.Dispatch<
    React.SetStateAction<{ [promptId: string]: string[] }>
  >;
  option: string;
}) => {
  return () => {
    setAnswers((prevAnswers) => {
      // Clones prevAnswers
      const newAnswers = { ...prevAnswers };

      const isSelected = prevAnswers[prompt.id]?.includes(option);

      if (isSelected) {
        // Option is already selected, remove it from the array
        newAnswers[prompt.id] = newAnswers[prompt.id].filter(
          (item) => item !== option
        );
      } else {
        // Option is not selected, add it to the array
        newAnswers[prompt.id] = [...(newAnswers[prompt.id] || []), option];
      }

      return newAnswers;
    });
  };
};
