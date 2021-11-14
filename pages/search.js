import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Footer from "./components/Footer";

export default function search() {
  return (
    <wrapper>
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

      <Footer />
    </wrapper>
  );
}

const wrapper = tw.div`
  bg-gray-200	h-screen
`;

const BackIcon = tw.div`
  bg-white p-3

`;
