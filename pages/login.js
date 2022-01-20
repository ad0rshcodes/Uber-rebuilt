import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/"); //If user = true, then he/she is directed to the home screen.
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Login to access your account</Title>
      <LoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign In With Google
      </SignInButton>
    </Wrapper>
  );
}

export default Login;

const Wrapper = tw.div`
flex flex-col items-center p-4 bg-gray-200 h-screen
`;
const UberLogo = tw.img`
w-1/6 m-5
`;
const LoginImage = tw.img`
m-5 w-1/2
`;
const SignInButton = tw.div`
bg-black text-white w-2/3 text-center p-3 cursor-pointer
`;

const Title = tw.div`
 text-4xl text-gray-500
`;
