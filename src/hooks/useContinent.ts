import React from "react"

export const useContinent = () => {
  
  const [ continents, setContinents] = React.useState(() => [
    {
      slug: "europa",
      title: "Europa",
      summary: "O continente mais antigo",
      pathImage: "./Europe.svg",
      inside: {
        banner: "./inside/europetwo.svg",
        chamada: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        aboutAbstract:{
          country: 50,
          indiom: 60,
          city: 27,
        }
      }
    },
    {
      slug: "asia",
      title: "Asia",
      summary: "O maior dos continentes",
      pathImage: "./Asian.jpg",
    },
    {
      slug: "africa",
      title: "Africa",
      summary: "O continente mais quente",
      pathImage: "./Africa.jpg",
    }
  ])


  return {
    continents
  }
  
}