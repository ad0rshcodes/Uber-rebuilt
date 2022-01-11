import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import Footer from "./components/Footer";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, () => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  });

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <a href="#">
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          </a>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search" passHref>
            <Button>
              <ButtonImg src="https://i.ibb.co/Xx4G91m/uberblack.png"></ButtonImg>
              Ride
            </Button>
          </Link>

          <Link href="/search" passHref>
            <Button>
              <ButtonImg src="https://i.ibb.co/n776JLm/bike.png"></ButtonImg>
              Wheels
            </Button>
          </Link>

          <Link href="/search" passHref>
            <Button>
              <ButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png"></ButtonImg>
              Schedule
            </Button>
          </Link>
        </ActionButtons>

        <Link href="/search" passHref>
          <InputButton>
            Where to?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </InputButton>
        </Link>
      </ActionItems>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-white h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mx-4
`;

const UserImage = tw.img`
  rounded-full w-14 border-gray-800 border-2 cursor-pointer
`;

const ActionButtons = tw.div`
  flex justify-center
`;

const Button = tw.div`
  flex flex-col bg-gray-200 rounded-lg shadow-lg mx-3 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex-1 transition text-xl transform hover:scale-105 cursor-pointer
`;

const ButtonImg = tw.img`
  h-28
`;

const InputButton = tw.button`
  bg-gray-200 p-5 rounded-lg w-1/2 mt-8 text-2xl flex justify-between hover:scale-105 transform transition duration-300 ease-in-out justify-center m-auto
`;
