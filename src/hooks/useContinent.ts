import React from "react"

export const useContinent = () => {
  
  const [ continents, setContinents] = React.useState(() => [
    {
      slug: "europa",
      title: "Europa",
      summary: "O continente mais antigo",
      pathImage: "./Europe.svg",
      inside: {
        banner: "/inside/europetwo.jpg",
        chamada: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        aboutAbstract:{
          country: 50,
          indiom: 60,
          city: 27,
        },
        cities:[
          {
            theCity: "Londres",
            state: "Reino Unido",
            imgCity: "/inside/europe-cities/londres.jpg",
            bandeira: "/inside/europe-cities/londres-bandeira.jpg",
          },
          ,
          {
            theCity: "Paris",
            state: "França",
            imgCity: "/inside/europe-cities/paris.jpg",
            bandeira: "/inside/europe-cities/paris-bandeira.jpg",
          },
          {
            theCity: "Roma",
            state: "Itália",
            imgCity: "/inside/europe-cities/roma.jpg",
            bandeira: "/inside/europe-cities/roma-bandeira.jpg",
          },
          {
            theCity: "Praga",
            state: "República Tcheca",
            imgCity: "/inside/europe-cities/praga.jpg",
            bandeira: "/inside/europe-cities/praga-bandeira.jpg",
          }
        ],
      }
    },
    {
      slug: "asia",
      title: "Asia",
      summary: "O maior dos continentes",
      pathImage: "./Asian.jpg",
      inside: {
        banner: "/inside/asiatwo.jpg",
        chamada: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico.",
        aboutAbstract:{
          country: 48,
          indiom: 2301,
          city: 13,
        },
        cities:[
          {
            theCity: "Tokyo",
            state: "Japan",
            imgCity: "/inside/asia-cities/tokyo.jpg",
            bandeira: "/inside/asia-cities/tokyo-bandeira.jpg",
          },
          {
            theCity: "Beijing",
            state: "China",
            imgCity: "/inside/asia-cities/beijing.jpg",
            bandeira: "/inside/asia-cities/beijing-bandeira.jpg",
          },
          {
            theCity: "Mumbai",
            state: "India",
            imgCity: "/inside/asia-cities/mumbai.jpg",
            bandeira: "/inside/asia-cities/mumbai-bandeira.jpg",
          },
          {
            theCity: "Jakarta",
            state: "Indonesia",
            imgCity: "/inside/asia-cities/jakarta.jpg",
            bandeira: "/inside/asia-cities/jakarta-bandeira.jpg",
          },
        ],
      }
    },
    {
      slug: "africa",
      title: "Africa",
      summary: "O continente mais quente",
      pathImage: "./Africa.jpg",
      inside: {
        banner: "/inside/africatwo.jpg",
        chamada: "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3 % da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de mil milhões de pessoas (estimativa para 2005), representando cerca de um sétimo da população do mundo, e 54 países independentes. Apresenta grande diversidade étnica, cultural, social e política. Dos trinta países mais pobres do mundo, pelo menos 21 são africanos.",
        aboutAbstract:{
          country: 54,
          indiom: 2000,
          city: 14,
        },
        cities:[
          {
            theCity: "Marrakesh",
            state: "Morocco",
            imgCity: "/inside/africa-cities/marrakesh.jpg",
            bandeira: "/inside/africa-cities/marrakesh-bandeira.jpg",
          },
          ,
          {
            theCity: "Beirute",
            state: "Lebanon",
            imgCity: "/inside/africa-cities/beirute.jpg",
            bandeira: "/inside/africa-cities/beirute-bandeira.jpeg",
          },
          {
            theCity: "Luxor",
            state: "Egypt",
            imgCity: "/inside/africa-cities/luxor.jpg",
            bandeira: "/inside/africa-cities/luxor-bandeira.jpeg",
          },
          {
            theCity: "Kigali",
            state: "Rwanda",
            imgCity: "/inside/africa-cities/kigali.jpg",
            bandeira: "/inside/africa-cities/kigali-bandeira.jpg",
          }
        ],
      }
    }
  ])


  return {
    continents
  }
  
}