import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { SingleCharacteristic } from "./SingleCharacteristic";



export const Characteristics = () =>{

  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <SingleCharacteristic icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <SingleCharacteristic icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <SingleCharacteristic icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <SingleCharacteristic icon="museum" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <SingleCharacteristic icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}