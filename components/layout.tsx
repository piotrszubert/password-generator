import React from 'react';
import Head from 'next/head';
import Navigation from './navigation';

interface Props {
  title?: string;
  children?: any;
}

const Layout: React.FC<Props> = ({ children, title = 'Password Manager' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
       <Navigation/>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
