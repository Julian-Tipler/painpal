import { View } from "react-native";

export enum Sizes {
  xxs = 2,
  xs = 4,
  sm = 8,
  md = 16,
  lg = 24,
  xl = 32,
}

type SizeString = keyof typeof Sizes;

const sizeMap: { [key: string]: Sizes } = {
  xxs: Sizes.xxs,
  xs: Sizes.xs,
  sm: Sizes.sm,
  md: Sizes.md,
  lg: Sizes.lg,
  xl: Sizes.xl,
};

export const Spacer = ({
  size = "md",
  horizontal = false,
}: {
  size?: SizeString;
  horizontal?: boolean;
}) => {
  const sizeValue = Sizes[size] || Sizes.md;

  const styles: any = {};
  if (horizontal) {
    styles.width = sizeValue;
  } else {
    styles.height = sizeValue;
  }
  return <View style={{ ...styles }} />;
};
