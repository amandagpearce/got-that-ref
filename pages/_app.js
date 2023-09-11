import Head from 'next/head';
import './_app.css';

import Header from '../components/layout/Header';
import Marquee from '../components/ui/Marquee';
import { SearchProvider } from '../context/SearchContext';
import { Container } from '@mui/material';
import { client } from '../apollo';
import { ApolloProvider } from '@apollo/client';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Got that ref?</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Marquee>
        SEEN A VISUAL ARTS REFERENCE IN MOVIES OR SERIES?{' '}
        <Link
          style={{ color: '#fff', textDecoration: 'none' }}
          href="/send-a-reference"
        >
          <StarIcon sx={{ marginX: '5px' }} />
          ADD
          <em style={{ color: '#ff69de', fontStyle: 'normal' }}>
            &nbsp;NEW REFERENCE&nbsp;
          </em>
          FORM HERE
          <StarIcon sx={{ marginX: '5px' }} />
        </Link>
      </Marquee>

      <SearchProvider>
        <Header />

        <ApolloProvider client={client}>
          <Container maxWidth="xlg" style={{ background: '#efeffd' }}>
            <main style={{ padding: '30px 0' }}>
              <Component {...pageProps} />
            </main>
          </Container>
        </ApolloProvider>
      </SearchProvider>
    </>
  );
}
