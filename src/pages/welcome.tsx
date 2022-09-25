import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const WelcomePage = () => {
  const { query } = useRouter();
  const name = query.name || "";

  return (
    <Layout title={`Welcome, ${name}`}>
      <h2>You did it, {name}!</h2>
      <p>Thanks for signing up you can close your browser now</p>
    </Layout>
  );
};

export default WelcomePage;
