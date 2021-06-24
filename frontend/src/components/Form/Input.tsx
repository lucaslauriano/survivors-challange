import {
  Icon,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputRightElement,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

import React, {
  useState,
  forwardRef,
  ElementType,
  ForwardRefRenderFunction,
} from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string | React.ReactNode;
  iconRight?: ElementType;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props }: InputProps,
  ref
) => {
  const { name, label, iconRight, type } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        size="md"
        color="gray.500"
        bgColor="gray.900"
        variant="filled"
        focusBorderColor="purple.500"
        borderRadius="6"
        _placeholder={{
          color: "gray.500",
        }}
        _hover={{
          bgColor: "gray.900",
        }}
        {...props}
        ref={ref}
        type={type === "password" ? (showPassword ? "password" : "text") : type}
      />
      {type === "password" && (
        <InputRightElement
          mt="7"
          mr="2"
          color="gray.500"
          cursor="pointer"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      )}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);
export default Input;
