import React from "react";
import Head from "next/head";
import Layout from "../../components/forum/Layout";

const index = () => {
  return (
    <>
      <Head>
        <title>Forum Application</title>
        <meta
          name="description"
          content="This is Forum Application using NextJs and Firebase"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Layout>
        <main></main>
      </Layout>
    </>
  );
};

export default index;
