import { GetStaticProps } from "next";
import { API_FORM_URL } from "../constants";
import { FormData } from "../types";
import Layout from "../components/Layout";
import UserForm from "../components/UserForm";
import Image from "next/image";
import styled from "styled-components";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(API_FORM_URL);
  const formData: FormData = await res.json();

  return {
    props: {
      formData,
    },
    // re-generate the page every hour if form data changes
    revalidate: 3600,
  };
};

type Props = {
  formData: FormData;
};

const Logo = styled(Image)`
  padding-bottom: 2rem !important;
`;

const IndexPage = (props: Props) => (
  <Layout title="Frontend Take-Home Exercise">
    <Logo src="/assets/logo.svg" width="200" height="200" />
    <UserForm data={props.formData} />
  </Layout>
);

export default IndexPage;
