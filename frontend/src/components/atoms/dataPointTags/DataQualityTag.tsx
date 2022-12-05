import {
  Box,
  Button,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiOutlineWarning } from "react-icons/ai";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { DataQualityType } from "../../../utils/types";

const DataQualityTag = ({
  dataQuality,
  setDataQuality,
}: {
  dataQuality: DataQualityType;
  setDataQuality: (dataQuality: DataQualityType) => void;
}) => {
  const possible: {
    [key in DataQualityType]: { label: string; color: string; icon: IconType };
  } = {
    CAUTION: {
      label: "Caution",
      color: "red.100",
      icon: AiOutlineWarning,
    },
    ACCEPTABLE: {
      label: "Acceptable",
      color: "blue.100",
      icon: FaRegThumbsUp,
    },
    GOOD: {
      label: "Good",
      color: "green.100",
      icon: BsStar,
    },
    EXCELLENT: {
      label: "Excellent",
      color: "orange.100",
      icon: BsStarFill,
    },
  };

  return (
    <Popover placement="right" trigger="hover">
      <PopoverTrigger>
        <Box
          bgColor={possible[dataQuality].color}
          p={2}
          borderRadius="md"
          display="inline-block"
          cursor="pointer"
          transition="all 0.2s ease-in-out"
          _hover={{ transform: "scale(1.075)" }}
        >
          <Heading size="xs">
            <Icon as={possible[dataQuality].icon} mr={1} />
            {possible[dataQuality].label}
          </Heading>
        </Box>
      </PopoverTrigger>
      <PopoverContent w="100%">
        <PopoverArrow />
        <VStack align="stretch" spacing={0} shadow="lg">
          {(
            ["CAUTION", "ACCEPTABLE", "GOOD", "EXCELLENT"] as DataQualityType[]
          ).map((option, idx) => (
            <Button
              borderRadius={0}
              borderTopRadius={idx === 0 ? "md" : 0}
              borderBottomRadius={idx === 3 ? "md" : 0}
              key={option}
              size="sm"
              leftIcon={<Icon as={possible[option].icon} />}
              isActive={dataQuality === option.toUpperCase()}
              onClick={() =>
                setDataQuality(option.toUpperCase() as DataQualityType)
              }
            >
              {option}
            </Button>
          ))}
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default DataQualityTag;