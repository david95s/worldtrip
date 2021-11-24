import { Flex, Heading, Text, Link as LinkChakra } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useContinent } from '../../hooks/useContinent';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


export const Slide = () =>{
  
  const { continents } = useContinent();

  return (
    <Flex w="100%" h={["250px","480px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
      <Swiper
          navigation={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay:4000,
          }}
          style={{width: '100%', flex: '1'}}
        >
          {
            continents.map((item)=>{
              return (
                <SwiperSlide key={item.slug}>
                  <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    bgImage={`url('${item.pathImage}')`}
                    bgPosition="100% 100%"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    textAlign="center"
                    borderRadius="2"
                  >

                  <Link href={`/continent/${item.slug}`} passHref>
                    <LinkChakra 
                      textDecor="none"
                      textShadow="1px 1px 1px black"
                      color="gray.100"
                      p="4"
                      borderRadius="3"
                      _hover={{
                        background: "#00000054"
                      }}
                      >
                      <Heading 
                      fontSize={["3xl","4xl","5xl"]}
                      
                      
                      fontWeight="bold"
                      >{item.title}</Heading>
                      <Text fontWeight="bold"  fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>{item.summary}</Text>
                    </LinkChakra>
                  </Link>
                  </Flex>
              </SwiperSlide>
              )
            })
          }
      </Swiper>
    </Flex>
  );
}