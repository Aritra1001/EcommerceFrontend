import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async"; //react-helmet package is required for seo, first we need to import Helmet from react-helmet
import {Toaster} from 'react-hot-toast'; // react-hot-toast package for the popups.


const Layout = (props) => {
  return (
    <>
    {/* Implemented seo in layout page, coz I am wrapping every navpage with layout */}
    {/* second step is to wrap the meta tags in Helmet and change content with props.content_name, to make it dynamic */}
    {/* Using react-helmet package, I was getting an error using UNSAFE_componentWillMount in strict mode, so to remove that, I have used 
    another package react-helmet-async and also wrapped the whole layout component in HelmetProvider */}
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={props.description}/>   
          <meta name="keywords" content={props.keywords}/>
          <meta name="author" content={props.author}/>
          <title>{props.title}</title>
        </Helmet>
        <Header />
        <main style={{ minHeight: "87vh" }}>
          {props.children}
          <Toaster/>
          </main>
        <Footer />
      </HelmetProvider>
    </>
  );
};

Layout.defaultProps={
  title: "Ecommerce-App",
  description: "mern-ecommerce-project",
  keywords:"react, node, express, mongodb",
  author:"Aritra Nandi"
}
export default Layout;
