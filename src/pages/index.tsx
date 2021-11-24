import { Flex, Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Characteristics } from "../components/Characteristics";
import { Slide } from "../components/Slide";

export default function Home() {
  return (
    <Flex direction="column">
      <Head >
        <title>WorldTrip - Home</title>
      </Head>

      <Banner/>
      <Characteristics/>
      <Box w={["60px","90px"]} mx="auto" h="2px" bg="gray.700" my={["9","20"]} />


      <Heading
        textAlign="center"
        fontWeight="500"
        mb={ ["5","14"] }
        fontSize={ ["lg","3xl", "4xl"] }
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>

      <Slide />
    </Flex>
  )
}
