import React, { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container } from '../styles/pages/Home';
import Input from '../components/input';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await axios.post('/api/subscribe', {
      email,
      worksheet: 'jpc0rrea'
    });
    router.push('/obrigado');
  };
  return (
    <>
      <Head>
        <title>Newsletter do jpc0rrea</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Container>
        <img
          src="https://avatars3.githubusercontent.com/u/56732309?s=460&u=ec214d68301def084dc60dfd602995f5d23dbbba&v=4"
          alt="João Pedro"
        />
        <h1>Essa é a página da newsletter do jpc0rrea</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <Input
            id="newsletter-input"
            placeholder="Digite seu melhor e-mail"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
          <button type="submit">Quero receber os e-mails!</button>
        </form>
        <p>
          Você pode se inscrever na{' '}
          <Link href="/outrasnewsletters/lucas">
            <a>Newsletter do Lucas</a>
          </Link>{' '}
          também!
        </p>
        <p className="second-p">
          Você pode se inscrever na{' '}
          <Link href="/outrasnewsletters/rodrigada">
            <a>Newsletter do rodrigadah</a>
          </Link>{' '}
          também!
        </p>
      </Container>
    </>
  );
};

export default Home;
