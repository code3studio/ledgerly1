import * as React from "react";
import { HStack, Box, Button, Link } from "@chakra-ui/react";

const Navigation: React.FC = () => {
  return (
    <HStack
      spacing="4"
      justify="space-between"
      w="100%"
      p="4"
      bg="transparent" // Transparent background
      color="white"
      position="fixed" // Fixed to stay at the top
      top="0"
      left="0"
      zIndex="10" // Ensures it floats above content
      alignItems="center" // Proper alignment for elements
    >
      {/* Logo/Name on the Left */}
      <Box fontSize="lg" fontWeight="bold" ml="4">
       
      </Box>

      {/* Links on the Right */}
      <HStack spacing="4" mr="4">
        <Link href="https://x.com/PysageDotFun" isExternal _hover={{ textDecoration: "underline" }}>
          Twitter
        </Link>
        <Link href="https://t.me/pysagesol" isExternal _hover={{ textDecoration: "underline" }}>
          Telegram
        </Link>
        <Button
          as={Link}
          href="https://github.com/pysageai/pysage"
          isExternal
          colorScheme="teal"
          size="sm"
        >
          GitHub
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navigation;
