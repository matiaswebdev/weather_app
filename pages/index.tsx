import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>

      <p>Base para projetos next.js montada.</p>
      <p>Configurados:</p>
      <p>Next.js</p>
      <p>Scss:</p>
      <p>Typescript</p>
      <p>Eslint:</p>
    </div>
  );
};

export default Home;
