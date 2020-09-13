import React, { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Container } from '../../styles/pages/Home';
import Input from '../../components/input';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios.post('/api/subscribe', {
      email,
      worksheet: 'rodrigada'
    });
    router.push('/obrigado');
  };
  return (
    <>
      <Head>
        <title>Newsletter do rodrigadah</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Container>
        <img
          src="https://avatars0.githubusercontent.com/u/66807411?s=460&v=4"
          alt="rodrigadah"
        />
        <h1>Essa é a página da newsletter do rodrigadah</h1>
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
          Voltar para a{' '}
          <Link href="/">
            <a>página do jpc0rrea</a>
          </Link>{' '}
        </p>
      </Container>
    </>
  );
};

export default Home;
