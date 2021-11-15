import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <a href="#">
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          </a>
          <Profile>
            <Name>Adarsh Sharma</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C5603AQHZBFgdG0WGDw/profile-displayphoto-shrink_200_200/0/1631380647000?e=1640822400&v=beta&t=x6ELTEZJvUp3arM1mdbw3-z4d4W5Gwgg3I9LP81cV88" />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <Button>
              <ButtonImg src="https://i.ibb.co/Xx4G91m/uberblack.png"></ButtonImg>
              Ride
            </Button>
          </Link>

          <Link href="/search">
            <Button>
              <ButtonImg src="https://i.ibb.co/n776JLm/bike.png"></ButtonImg>
              Wheels
            </Button>
          </Link>

          <Link href="/search">
            <Button>
              <ButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png"></ButtonImg>
              Schedule
            </Button>
          </Link>
        </ActionButtons>

        <Link href="/search">
          <InputButton>
            Where to?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
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

  flex flex-col bg-white	 h-screen		

`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex  justify-between
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
  rounded-full w-14 border-gray-800 border-2
`;

const ActionButtons = tw.div`
  flex justify-center 

`;

const Button = tw.div`
  flex bg-gray-200 rounded-lg shadow-lg mx-3 hover:shadow-xl transition-shadow duration-300 ease-in-out justify-center items-center flex-col flex-1 transition text-xl transform hover:scale-105

`;

const ButtonImg = tw.img`
  h-28
`;

const InputButton = tw.button`

  bg-gray-200 p-5 rounded-lg w-96 mt-8 text-2xl flex justify-between hover:scale-105 transform transition duration-300 ease-in-out justify-center m-auto

`;
