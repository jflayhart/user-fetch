import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const WelcomePage = () => {
  const { query } = useRouter();
  const name = query.name || "";

  useEffect(() => {
    const ConfettiGenerator = require("confetti-js")
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <>
      <canvas id="confetti-canvas" style={{ position: "absolute" }} />
      <Layout title={`Welcome, ${name}`} id="welcome">
        <h2>You did it, {name}!</h2>
        <p>Thanks for signing up you can close your browser now</p>
      </Layout>
    </>
  );
};

export default WelcomePage;
