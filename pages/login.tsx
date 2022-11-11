import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

import LoginPage from "../components/LoginPage";

const Button = styled.button`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default function Login() {
  return <LoginPage />;
}
