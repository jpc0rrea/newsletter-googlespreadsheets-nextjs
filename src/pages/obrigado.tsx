import React, { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Obrigado!</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Container>
        <h1>Obrigado por se inscrever em nossa newsletter!</h1>

        <p>
          Voltar para a{' '}
          <Link href="/">
            <a>página de newsletter do jpc0rrea</a>
          </Link>{' '}
          também!
        </p>
      </Container>
    </>
  );
};

export default Home;
