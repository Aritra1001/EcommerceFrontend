import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <>
      <Layout title='Ecommerce-Aboutus'>
        <div className="contactus  row align-center">
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <img
              src="/images/aboutus.jpg"
              alt="contactus"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-xxl-5 col-xl-5 offset-xl-1 mt-3 contact-text">
            <h2 className="bg-dark text-warning text-center">ABOUT US</h2>
            <p className="about-text">
              This is an ecommerce website named ishop, where you can buy apple
              products and functions the same as any ecommerce website. We can
              add items to cart, filter the products according to price, brand
              etc. We can also do payment like in any other ecommerce website.
              This website is created by Aritra Nandi to practice a MERN project
              also to know the functionalities of an ecommerce website and also
              to implement the concepts learned by me.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
