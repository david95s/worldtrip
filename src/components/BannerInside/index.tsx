import { Flex, Heading } from "@chakra-ui/react";


interface BannerInsideProps {
  pathBackGround: string;
  title: string;
}

export const BannerInside = ({ pathBackGround, title }: BannerInsideProps) =>{
  return (
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      bgImage={`url(${pathBackGround})`}
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      align={["center", "end"]}
      justify={["center", "start"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      px="36"
      py="75"
    >
      <Heading
        textAlign={["center","left"]}
        fontSize={["1.75rem","5xl"]}
        color="gray.100"
        fontWeight="500"
        textShadow="1px 1px 1px black"
      >
        {title}
      </Heading>
    </Flex>
  );
}