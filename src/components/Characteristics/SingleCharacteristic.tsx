import {
  Flex,
  Image,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";


interface SingleCharacteristicProps {
  icon: string;
  text: string;
}

export const SingleCharacteristic = ({ icon, text } : SingleCharacteristicProps) => {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  });

  return (
    <Flex direction={["row","column"]} align="center" justify="center">
      {isMobile ? 
        <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" alt="Icons descriptions"/> : 
        <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>
      }
      <Text fontWeight="600" fontSize={["md", "xl","2xl"]}>{text}</Text>
    </Flex>
  );
}