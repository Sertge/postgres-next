import Head from "next/head";
import { ReactNode } from "c:/users/sertge/appdata/local/microsoft/typescript/4.3/node_modules/@types/react";

const PageContainer= ({children}:{children:ReactNode}) =>
  <>
    <Head>
      <title>Postgres created on Next.JS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </>

  export default PageContainer