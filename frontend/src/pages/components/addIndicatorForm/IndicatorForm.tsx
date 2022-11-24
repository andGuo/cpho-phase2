import { AddIcon } from "@chakra-ui/icons";
import {
  VStack,
  Button,
  ButtonGroup,
  Box,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { DataPoint } from "../../../utils/types";
import { AddDataPointButton } from "./AddDataPointButton";
import { DataPointTable } from "./dataPointTable/DataPointTable";
import IndicatorGenInfo from "./IndicatorGenInfo";
import ReviewSubmit from "./ReviewSubmit";
import { v4 as uuid } from "uuid";

const IndicatorForm = () => {
  const [values, setValues] = useState({
    indicatorName: "",
    detailedIndicator: "",
    category: 1,
    subCategory: 1,
    dataPoints: [] as DataPoint[],
  });

  const {
    indicatorName,
    detailedIndicator,
    category,
    subCategory,
    dataPoints,
  } = values;

  const setField = (field: string, value: any) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const [step, setStep] = useState(1);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const addBlankDataPoint = () => {
    const dataPoint: DataPoint = {
      uuid: uuid(),
      country: "CANADA",
      geography: "COUNTRY",
      sex: "",
      gender: "",
      ageGroup: "",
      ageGroupType: "",
      dataQuality: "ACCEPTABLE",
      value: 0,
      valueLowerBound: 0,
      valueUpperBound: 0,
      valueUnit: "PERCENT",
      singleYearTimeframe: 2022,
      multiYearTimeframe: undefined,
    };
    setValues({
      ...values,
      dataPoints: [dataPoint, ...dataPoints],
    });
  };

  return (
    <VStack w="100%">
      <ButtonGroup py={4}>
        <Button disabled={step <= 1} onClick={prevStep}>
          Previous
        </Button>
        <Button disabled={step >= 3 || indicatorName === ""} onClick={nextStep}>
          Next
        </Button>
      </ButtonGroup>

      {step === 1 && (
        <Box>
          <IndicatorGenInfo
            indicatorName={indicatorName}
            detailedIndicator={detailedIndicator}
            category={category}
            subCategory={subCategory}
            setField={setField}
          />
        </Box>
      )}
      {step === 2 && (
        <VStack w="100%">
          <Heading size="lg" mb={4}>
            <Box display="inline" color="red.500">
              {dataPoints.length}
            </Box>{" "}
            data points for{" "}
            <Box display="inline" color="red.500">
              {indicatorName}
            </Box>
          </Heading>
          <HStack>
            <AddDataPointButton
              dataPoints={dataPoints}
              setDataPoints={(d) => setField("dataPoints", d)}
            />
            <Button
              colorScheme="green"
              leftIcon={<AddIcon />}
              onClick={addBlankDataPoint}
            >
              New blank data point
            </Button>
          </HStack>
          <DataPointTable
            setDataPoints={(d) => setField("dataPoints", d)}
            dataPoints={dataPoints}
          />
        </VStack>
      )}
      {step === 3 && <ReviewSubmit values={values} />}
    </VStack>
  );
};

export default IndicatorForm;
