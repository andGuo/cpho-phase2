import { DownloadIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FileColumnData } from "../../utils/constants";
import { FileFormat } from "../../utils/types";

const getCleanName = (type: string) => {
  return type === "indicator"
    ? "Indicator"
    : type === "trendAnalysis"
    ? "Trend Analysis"
    : "Benchmarking";
};

export function FileTypeChoice({
  activeType,
  setActiveType,
}: {
  activeType: FileFormat;
  setActiveType: (type: FileFormat) => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ButtonGroup isAttached>
        <Button
          onClick={() => setActiveType("indicator")}
          isActive={activeType === "indicator"}
        >
          Indicator
        </Button>
        <Button
          onClick={() => setActiveType("trendAnalysis")}
          isActive={activeType === "trendAnalysis"}
        >
          Trend Analysis
        </Button>
        <Button
          onClick={() => setActiveType("benchmarking")}
          isActive={activeType === "benchmarking"}
        >
          Benchmarking
        </Button>
      </ButtonGroup>
      <Button
        colorScheme="red"
        variant="link"
        leftIcon={<InfoIcon />}
        onClick={onOpen}
      >
        View expected format for {getCleanName(activeType)} files
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">
              File format for {getCleanName(activeType)}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List my={3}>
              {FileColumnData[activeType].map((field, idx) => (
                <ListItem key={idx}>
                  {idx + 1}. {field.label}
                </ListItem>
              ))}
            </List>
          </ModalBody>
          <ModalFooter>
            <Button
              leftIcon={<DownloadIcon />}
              as="a"
              download
              href="sampleFiles/indicators.csv"
              colorScheme="blue"
              mr={3}
            >
              Export empty CSV
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
