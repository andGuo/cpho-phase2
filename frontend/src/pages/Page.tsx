import { Heading, Box, Button, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";

export function Page({
  title,
  children,
  backButton,
}: {
  title: String;
  children?: any;
  backButton?: {
    show: boolean;
    redirectUrl: string;
  };
}) {
  let navigate = useNavigate();
  return (
    <Box minHeight="100vh" display="flex" flexDir="column">
      <Header />
      <hr
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      />
      <Box p={[1, 2, 3]}>
        <HStack align="start" mb={4}>
          {backButton && backButton.show && (
            <Button onClick={() => navigate(backButton.redirectUrl)}>
              Back
            </Button>
          )}
          <Heading fontWeight={700} size="xl">
            {title}
          </Heading>
        </HStack>
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
}
