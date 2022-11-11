import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

import Container from "../components/Container";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default function Home() {
  return (
    <Container>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Button>This my button component.</Button>

        <Link href="/login">Login</Link>
      </main>

      <footer></footer>
    </Container>
  );
}
