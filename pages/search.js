import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Footer from "./components/Footer";

export default function search() {
  return (
    <Wrapper>
      <Link href="./">
        <BackIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-chevron-compact-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
            />
          </svg>
        </BackIcon>
      </Link>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />

          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <InputBoxes>
          <Input type="text" placeholder="Enter Pickup location" />
          <Input type="text" placeholder="Enter Drop location " />
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      <Confirm>
        <ConfirmButton>Confirm Locations</ConfirmButton>
      </Confirm>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  bg-gray-200	h-screen
`;

const BackIcon = tw.div`
  bg-white p-3

`;

const InputContainer = tw.div`
  bg-white flex justiify-between p-3 items-center

`;
const FromToIcons = tw.div`
  w-10 flex flex-col items-center


`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10

`;

const Square = tw.img`
  h-5
`;

const InputBoxes = tw.div`
  p-4 flex justify-center flex-col flex-1 


`;

const Input = tw.input`
  bg-gray-200 my-2 rounded-lg p-2 outline-none border-none 

`;

const PlusIcon = tw.img`
  h-10 w-10  bg-gray-200 rounded-full

`;

const SavedPlaces = tw.div`

  bg-white flex items-center px-4 mt-2 py-2

`;

const StarIcon = tw.img`
  h-10 w-10 rounded-full bg-gray-400 p-2 mr-2
`;

const ConfirmButton = tw.button`
  bg-black text-white rounded-lg m-4 w-full p-2 text-xl

`;

const Confirm = tw.div`
  flex justify-center
`;
