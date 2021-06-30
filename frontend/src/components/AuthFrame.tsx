import { Flex } from "@chakra-ui/layout";

import Image from "next/image";

const AuthFrame = () => {
  return (
    <Flex h="auto" mt="57px" align="center">
      <Flex width="1000px">
        <Image
          src="/authentication.svg"
          alt="Picture 02"
          width="1000px"
          height="500px"
        />
      </Flex>
    </Flex>
  );
};

export default AuthFrame;
