import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import {
  containerStyleProps,
  headingStyleProps,
  textStyleProps,
  avatarStyleProps,
  blurStyleProps,
  submitButtonStyleProps,
  passwordStyleProps,
  emailStyleProps,
  avatarStackContainerStyleProps,
  textStackStyleProps,
  circleStoriesStyleProps,
  loginFormStyleProps,
  formHeadStyleProps,
  formTitleStyleProps,
  linkStyleProps,
} from "./styles/login-page-style-props";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Field, Form, FormikProps } from "formik";
import { Blur } from "./Blur";
import { LoginType } from "./types/loginType";
import { loginValidationSchema } from "../../utils";
import { useDarkModeTheme } from "../../contexts";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { login } from "../../store/slices";
import { AppDispatch, RootState } from "../../store";
const avatars = [
  {
    name: "Mehul Satardekar",
    url: "https://images.weserv.nl/?url=https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297050/flicker/flicker-user-img/mehulsatardekar_wqyksi.jpg",
  },
  {
    name: "Hardwell",
    url: "https://images.weserv.nl/?url=https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657298640/flicker/flicker-user-img/277316583_281741717325036_5159690811602956398_n_aftncy.jpg",
  },
  {
    name: "Natalie Portman",
    url: "https://images.weserv.nl/?url=https://res.cloudinary.com/dwhsfh3sc/image/upload/v1658784621/flicker/flicker-user-img/240518537_398789948263808_5626611832738449619_n_urbmll.jpg",
  },
  {
    name: "Selena Gomez",
    url: "https://images.weserv.nl/?url=https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297057/flicker/flicker-user-img/selenagomez_ogrq2k.jpg",
  },
  {
    name: "Hitesh Chaudhary",
    url: "https://images.weserv.nl/?url=https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297053/flicker/flicker-user-img/hiteshchoudhary_tsjtgy.jpg",
  },
];

const Login = () => {
  const {
    colorProp: { bodybg, cardBg, cardText, cardLightText },
  } = useDarkModeTheme();
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const location: any = useLocation();

  const { userToken, isLoading } = useSelector(
    (state) => (state as RootState).authentication
  );

  const initialValues: LoginType = {
    email: "",
    password: "",
  };

  const loginFormData = async (values: LoginType) => {
    console.log(values);
    dispatch(
      login({
        username: values.email,
        password: values.password,
      })
    );
  };

  const loginAsGuest = () => {
    dispatch(
      login({
        username: "natalie",
        password: "nataliePortman123!",
      })
    );
  };

  useEffect(() => {
    if (userToken) {
      if (location.state) {
        navigate(location?.state?.from?.pathname, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [userToken]);
  return (
    <>
      <Box position={"relative"}>
        <Container as={SimpleGrid} {...containerStyleProps}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading {...headingStyleProps}>
              Connect with people <Text {...textStyleProps}>&</Text> share your
              memories.
            </Heading>
            <Stack {...avatarStackContainerStyleProps}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={useBreakpointValue({ base: "md", md: "lg" })}
                    {...avatarStyleProps}
                  />
                ))}
              </AvatarGroup>
              <Text {...textStackStyleProps}>+</Text>
              <Flex
                width={useBreakpointValue({ base: "44px", md: "60px" })}
                height={useBreakpointValue({ base: "44px", md: "60px" })}
                {...circleStoriesStyleProps}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack bg={cardBg} {...loginFormStyleProps}>
            <Stack spacing={4}>
              <Heading color={cardText} {...formHeadStyleProps}>
                Log In
              </Heading>
              <Text color={cardLightText} {...formTitleStyleProps}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text>
            </Stack>
            <Box mt={10}>
              <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={loginFormData}
              >
                {({ errors, touched }: FormikProps<LoginType>) => (
                  <Form>
                    <Stack spacing={4}>
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <FormLabel htmlFor="email">username</FormLabel>

                        <Field as={Input} name="email" {...emailStyleProps} />

                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <FormLabel htmlFor="password" color={cardText}>
                          Password
                        </FormLabel>

                        <Field
                          as={Input}
                          name="password"
                          {...passwordStyleProps}
                        />

                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                    </Stack>
                    <Button type="submit" {...submitButtonStyleProps}>
                      Login To Account
                    </Button>
                  </Form>
                )}
              </Formik>
              <Button {...submitButtonStyleProps} onClick={loginAsGuest}>
                {isLoading ? (
                  <>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                    />
                    Signing-in
                  </>
                ) : (
                  "Login as Guest"
                )}
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?
                  <Link to="/signup" style={{ ...linkStyleProps }}>
                    Create Account here!
                  </Link>
                </Text>
              </Stack>
            </Box>
            <Link to="/mockman">mockman</Link>
          </Stack>
        </Container>
        <Blur {...blurStyleProps} />
      </Box>
    </>
  );
};

export { Login };
