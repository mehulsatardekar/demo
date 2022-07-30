import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import {
  flexStyleProps,
  stackStyleProps,
  boxContainerStyleProps,
  headingStyleProps,
  textStyleProps,
  signupButtonStyleProps,
  signupContainerStyleProps,
  linkStyleProps,
} from "./styles/signup-style-props";

import { signupValidationSchema } from "../../utils";

import { SignupType, SignupErrorType } from "./types/SignupType";

import { Formik, Field, Form } from "formik";

import { Link } from "react-router-dom";
import { useDarkModeTheme } from "../../contexts";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { signup } from "../../store/slices";

const Signup = () => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: SignupType = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signupFormValidate = async (values: SignupType) => {
    console.log(values);
    dispatch(
      signup({
        firstname: values.firstname,
        username: values.email,
        lastname: values.lastname,
        password: values.password,
        bio: "",
        biolink: "",
        backgroundImgUrl: "",
        profilePicUrl: "",
      })
    );
  };

  return (
    <Flex {...flexStyleProps}>
      <Stack {...stackStyleProps}>
        <Box bg={cardBg} {...boxContainerStyleProps}>
          <Stack align={"center"}>
            <Heading {...headingStyleProps}>Sign up</Heading>
            <Text {...textStyleProps}>
              Create Account and share memories.✌️
            </Text>
          </Stack>
          <Stack spacing={4} mt={3}>
            <Formik
              initialValues={initialValues}
              validationSchema={signupValidationSchema}
              onSubmit={signupFormValidate}
            >
              {({ errors, touched }) => (
                <Form>
                  <HStack mb={5}>
                    <Box>
                      <FormControl
                        id="firstName"
                        isInvalid={!!errors.firstname && touched.firstname}
                      >
                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                        <Field as={Input} type="text" name="firstname" />
                        <FormErrorMessage>{errors.firstname}</FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        id="lastName"
                        isInvalid={!!errors.lastname && touched.lastname}
                      >
                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                        <Field as={Input} type="text" name="lastname" />
                        <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                      </FormControl>
                    </Box>
                  </HStack>

                  <FormControl
                    isInvalid={!!errors.email && touched.email}
                    mt="3"
                  >
                    <FormLabel id="email">Email address</FormLabel>
                    <Field as={Input} type="email" id="email" name="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                    mt="3"
                  >
                    <FormLabel id="password">Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      !!errors.confirmPassword && touched.confirmPassword
                    }
                    mt="3"
                  >
                    <FormLabel id="confirmpassword">Confirm Password</FormLabel>
                    <Field
                      as={Input}
                      type="password"
                      id="confirmpassword"
                      name="confirmPassword"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                  <Stack {...signupContainerStyleProps}>
                    <Button type="submit" {...signupButtonStyleProps}>
                      Sign up
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/login" style={{ ...linkStyleProps }}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export { Signup };
