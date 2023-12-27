import Head from "next/head";

import Header from "@/comps/header";
import Footer from "@/comps/footer";
import { Main } from "@/comps/main"

import { GlobalProvider } from "@/context/";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import QR from "@/comps/utils/QR";
import { WS } from "@/comps/utils/WS";

export default function Home() {
  return (
    <div className="min-w-screen-xl">
      <GlobalProvider>
        <Head>
          <title>Coin Market</title>
          <meta name="description" content="Generated by create-wc-dapp" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <Header />
        <Main />
        <Footer />
        <WS />
        {/* <QRModal /> */}
      </GlobalProvider>
      <ToastContainer />
    </div>
  );
}
