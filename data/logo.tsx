import { chakra, HTMLChakraProps } from "@chakra-ui/react";

export const Logo: React.FC<HTMLChakraProps<"img">> = (props) => {
  return (
    <chakra.img
      src="/static/images/pysageonline.png" // Correct path for Next.js public assets
      alt="Logo"
      {...props}
    />
  );
};
