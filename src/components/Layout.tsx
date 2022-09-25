import React, { ReactNode } from "react";
import Head from "next/head";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
  id?: string;
};

const Main = styled.main`
  padding: 1rem 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;

const Layout = ({
  id,
  children,
  title = "This is the default title",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Main id={id}>{children}</Main>
  </>
);

export default Layout;
