import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import Head from "next/head";


interface ContentProps {
  chamada: string;
  title: string;
  aboutAbstract:{
    country: number,
    indiom: number,
    city: number,
  }
}

export const Content = ({chamada, aboutAbstract, title}: ContentProps) => {

  return (
    <>
      <Head>
        <title>WorldTrip - {title}</title>
      </Head>
      <Flex 
        direction={["column","column", "column", "row"]}
        width={"100%"} justify="space-between" alignItems="center"
      >
        
        <Box maxW={["100%", "100%", "100%","560px"]}>
          <Text
            fontSize={["lg", "xl", "xl", "2xl"]}
            
            textAlign="justify"
          >{chamada}</Text>
        </Box> 

        <Box w={["100%","100%", "70%", "40%"]} mt={["50px", "50px", "50px", 0]}>
          <Flex justify="space-between">
            <Box>
              <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
                {aboutAbstract.country}
              </Heading>
              <Text fontWeight="500" fontSize={["md", "xl"]} >
                países
              </Text>
            </Box>
            <Box>
              <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
                {aboutAbstract.indiom}
              </Heading>
              <Text fontWeight="500" fontSize={["md", "xl"]} >
                línguas
              </Text>
            </Box>
            <Box>
              <Heading fontSize={["2xl","5xl"]} color="yellow.400" textAlign="center" fontWeight="500">
                {aboutAbstract.city}
              </Heading>
              <Text fontWeight="500" fontSize={["md", "xl"]} >
                cidades +100
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}