import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from '../components/Layout';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
// import { useMemo } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

// function useApollo(initialState) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }
// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? createApolloClient();

//   // If your page has Next.js data fetching methods that use Apollo Client,
//   // the initial state gets hydrated here
//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//     const existingCache = _apolloClient.extract();

//     // Restore the cache using the data passed from
//     // getStaticProps/getServerSideProps combined with the existing cached data
//     _apolloClient.cache.restore({ ...existingCache, ...initialState });
//   }

//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === "undefined") return _apolloClient;

//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;
//   return _apolloClient;
// 



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:
    new HttpLink({
      uri:process.env.URI
    
})});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
   </ApolloProvider>
  );
}
