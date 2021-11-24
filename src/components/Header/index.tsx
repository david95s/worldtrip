import { Flex, Button, Image, Grid, Icon } from "@chakra-ui/react";
import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useRouter } from "next/dist/client/router";

interface HeaderProps {
  toogleThemeToDark: () => void;
  theDarkTheme: boolean;
}

export default function Header({ toogleThemeToDark, theDarkTheme }: HeaderProps){

  const { asPath } = useRouter();

  function handleTheme(){
    toogleThemeToDark();
  }

  return(
    <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["50px","100px"]} align="center" justify="center">
      <Button onClick={handleTheme} colorScheme="dark" variant="outline" color="dark" position="absolute" right="2" top="2">
        {theDarkTheme ? "☀️" : "🌒"}
      </Button>

      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        { asPath !== "/" && (
          <Link href="/">
            <a>
            <Icon as={ RiArrowLeftSLine } fontSize={[20,40]} justifySelf="start"/>
            </a>
          </Link>
        )}
      <Image
        w={["81px","184px"]}
        src="/Logo.svg"
        alt="Um avição voando sobre o nome da marca world trip"
        justifySelf="center"
        gridColumn="2"
      />
      </Grid>
    </Flex>
  )
}