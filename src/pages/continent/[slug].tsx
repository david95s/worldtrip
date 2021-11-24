import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React from "react";
import { BannerInside } from "../../components/BannerInside";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { useContinent } from "../../hooks/useContinent";


interface InsideContinentProps {
  slug: string,
  title: string,
  summary: string,
  pathImage: string,
  inside: {
    banner: string,
    chamada: string,
    aboutAbstract:{
      country: number,
      indiom: number,
      city: number,
    },
    cities:{
      theCity: string,
      state: string,
      imgCity: string,
      bandeira: string,
    }[];
  }
}[]



export default function Continent() {

  const { continents } = useContinent();


  const { query } = useRouter();
  const { slug } = query;

  

  const [insideContinent, setinsideContinent] = React.useState<InsideContinentProps[]>([]);

  React.useMemo(()=>{
    if(slug){
      const actualContinent = continents.filter((item: InsideContinentProps) => {
        return (item.slug === slug)
      });
      setinsideContinent(actualContinent)
    }
  },[slug, continents]);



  if(insideContinent.length === 0){
    return <h1>CARREGANDO...</h1>
  }
  return (
    <>
      <Head>
        <title>WorldTrip - {insideContinent[0].title}</title>
      </Head>
      <Box as="section">

        {insideContinent.map((item)=>{
          return (
            <Flex flexDir="column" key={item.slug}>
              <BannerInside title={item.title} pathBackGround={item.inside.banner}/>

              <Box 
                direction="column"
                maxW="1160px"
                w="100%"
                mx="auto"
                px="1rem"
                my={["8", "20"]}
                >
                <Content 
                  title={item.title}
                  chamada={item.inside.chamada}
                  aboutAbstract={item.inside.aboutAbstract}
                />
                <Cities dataCities={item.inside.cities}/>
              </Box>
            </Flex>
          )
        })}
      </Box>
    </>
  )
}