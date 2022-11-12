import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";

import Container from "../components/Container";

export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // unserious check
    const user = sessionStorage.getItem("login");

    if (!user) {
      Router.push("/login");
      return;
    }
    setUser(JSON.parse(user));
  }, []);
  return (
    <Container>
      <main>
        <h1>You are in! 👩‍💻✨</h1>
      </main>

      <footer>
        {user && (
          <p>
            Hello, {user.firstName} {user.lastName}!
          </p>
        )}
        You can check login page again here:{" "}
        <Link
          href="/login"
          css={(theme) => ({
            color: theme.colors.butterflypea.dark,
            fontWeight: "700",
          })}
        >
          Login
        </Link>
      </footer>
    </Container>
  );
}
