import { Flex, Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { useContinent } from "../../hooks/useContinent";




export default function Continent() {

  const { continents } = useContinent();


  const { query } = useRouter();
  const { slug } = query;

  
  const [insideContinent, setinsideContinent] = React.useState([]);

  React.useMemo(()=>{
    if(slug){
      const actualContinent = continents.filter(item => {
        return (item.slug === slug)
      });
      setinsideContinent(actualContinent)
    }
  },[slug, continents]);


  React.useEffect(()=>{
    console.log(insideContinent)
  },[insideContinent])

  return (
    <Box as="section">

    </Box>
  )
}