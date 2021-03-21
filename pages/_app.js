import {Provider} from 'react-redux';
import store from "../store/store";
import '../styles/index.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Wearedevs test task</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;600&display=swap" rel="stylesheet"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
