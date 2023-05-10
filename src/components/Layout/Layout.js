import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet"; //react-helmet package is required for seo

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description}/>
        <meta name="keywords" content={props.keywords}/>
        <meta name="author" content={props.author}/>
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "87vh" }}>{props.children}</main>
      <Footer />
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
