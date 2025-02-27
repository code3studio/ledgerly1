import * as React from "react";
import { Box, Flex, Heading, VisuallyHidden } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

import siteConfig from "data/config";

export const Logo = ({ href = "/", onClick }: LogoProps) => {
  let logo;
  if (siteConfig.logo) {
    logo = <Box as={siteConfig.logo} height="28px" />;
  } else {
    logo = (
      <Heading as="h2" size="md">
        {siteConfig.seo?.title}
      </Heading>
    );
  }

  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        alignItems={"center"}
        _hover={{ textDecoration: "none" }}
      >
        {logo}
        <Heading as="h2" size="md" ml={4}>
          {siteConfig.seo?.title}
        </Heading>
      </Link>
    </Flex>
  );
};
