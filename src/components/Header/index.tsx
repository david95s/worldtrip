import { Flex, Button } from "@chakra-ui/react";

interface HeaderProps {
  toogleThemeToDark: () => void;
}

export default function Header({ toogleThemeToDark }: HeaderProps){

  function handleTheme(){
    toogleThemeToDark();
  }

  return(
    <>
      <Button onClick={handleTheme} colorScheme="teal" variant="solid" color="gray.900" position="absolute" right="2" top="2">
        click
      </Button>
    <Flex as="header">
    </Flex>
    </>
  )
}