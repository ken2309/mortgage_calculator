import React,{ Suspense } from "react"
import type { HeadFC, PageProps } from "gatsby";
import '../styles/home.css';
import IntroBlock from './partials/IntroBlock';
import MortgageCalculator from './partials/MortgageCalculator';
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Loading from "./partials/Loading";
const IndexPage: React.FC<PageProps> = () => {

  return (
    <Suspense fallback={<Loading />}>
    <main>
      <Header/>
      <IntroBlock />
      <MortgageCalculator />
      <Footer />
    </main>
    </Suspense>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
