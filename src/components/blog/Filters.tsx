import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";

const Filters = () => {
  const [value, setValue] = useState("1");

  return (
    <div className="my-20 px-8">
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton
            _expanded={{ color: "blackAlpha.900" }}
            color="blackAlpha.800"
            fontWeight="medium"
            letterSpacing="wide"
            textAlign={"left"}
          >
            <Box flexGrow={1}>Category</Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio value="1">First</Radio>
                <Radio value="2">Second</Radio>
                <Radio value="3">Third</Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;
