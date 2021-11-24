import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";

interface CitiesProps {
  dataCities: {
    theCity: string,
    state: string,
    imgCity: string,
    bandeira: string,
  }[]
}

export const Cities = ({ dataCities } : CitiesProps) => {
  return (
    <Box mt="100px">
      <Heading fontWeight="500" fontSize={["2xl","4xl"]} >Cidades +100</Heading>
      <Flex flexDir={["column","column",  "row"]}  mt="50px" width={"100%"} alignItems="center">
        {dataCities.map((item)=>{
          return (
            <Box mb={["40px"]} mr="25px" key={item.state} borderRadius="4px" overflow="hidden">
              <Image src={item.imgCity} alt={`${item.state}`} h="170px" w="100%"/>
              <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Box>
                  <Heading fontSize="xl" fontWeight="500">{item.theCity}</Heading>
                  <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{item.state}</Text>
                </Box>
                <Image 
                  src={item.bandeira}
                  alt={`bandeira da cidade ${item.theCity}`}
                  boxShadow="0px 0px 0px 1px black"
                  w="30px"
                  h="30px"
                  borderRadius="50%"
                  objectFit="cover"/>
              </Flex>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}