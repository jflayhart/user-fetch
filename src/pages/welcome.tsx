import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
// @ts-ignore this is valid
import ConfettiGenerator from "confetti-js";
import styled from "styled-components";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const TextCenter = styled.div`
  text-align: center;
`;

const WelcomePage = () => {
  const { query } = useRouter();
  const name = query.name || "";

  useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <>
      <canvas id="confetti-canvas" style={{ position: "absolute" }} />
      <Layout title={`Welcome, ${name}`} id="welcome">
        <TextCenter>
          <h2>You did it, {name}!</h2>
          <p>Thanks for signing up you can now close this window</p>
        </TextCenter>
      </Layout>
    </>
  );
};

export default WelcomePage;
