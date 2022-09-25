import { GetStaticProps } from "next";
import { FormData } from "../types";
import Layout from "../components/Layout";
import UserForm from "../components/UserForm";
import Image from "next/image";
import styled from "styled-components";
import { getFormData } from "../services/getFormData";

export const getStaticProps: GetStaticProps = async () => {
  const formData = await getFormData();
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

// TODO ErrorBoundary
const IndexPage = (props: Props) => (
  <Layout title="Sign up">
    <Logo
      src="/assets/logo.png"
      width="235"
      height="222"
      alt="fetch dog logo"
    />
    <UserForm data={props.formData} />
  </Layout>
);

export default IndexPage;
