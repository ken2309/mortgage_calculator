import React,{ Suspense } from "react"
import type { HeadFC, PageProps } from "gatsby";
import '../styles/home.css';
import Loading from "../components/Loading";
// import IntroBlock from './partials/IntroBlock';
// import MortgageCalculator from './partials/MortgageCalculator';
// import Footer from "./partials/Footer";
// import Header from "./partials/Header";
const Header = React.lazy(() => import("./partials/Header"));
const Footer = React.lazy(() => import("./partials/Footer"));
const IntroBlock = React.lazy(() => import("./partials/IntroBlock"));
const MortgageCalculator = React.lazy(() => import("../components/MortgageCalculator"));
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
