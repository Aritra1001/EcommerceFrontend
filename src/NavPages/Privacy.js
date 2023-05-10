import React from "react";
import Layout from "../components/Layout/Layout";

const Privacy = () => {

   const scroll = ()=>{
      window.scroll(0,0);
   }

  return (
    <>
      <Layout title={'Ecommerce- Privacy Policy'}>
        <div className="container my-4">
          <h1 className="bg-dark text-center py-3 privacy-head">
            ishop.in Privacy Notice
          </h1>
          <div className="privacy-content mx-3">
            <h2 className="my-3 ">
              What Personal Information About Customers Does iSHOP Collect?
            </h2>
            <p>
              We collect your personal information in order to provide and
              continually improve our products and services.
            </p>
            <p>Here are the types of personal information we collect:</p>
            <p>
              <strong>Information You Give Us:</strong> We receive and store any
              information you provide in relation to iSHOP Services. You can
              choose not to provide certain information, but then you might not
              be able to take advantage of many of our Services.
            </p>
            <p>
              <strong>Automatic Information: </strong> We automatically collect
              and store certain types of information about your use of iSHOP
              Services, including information about your interaction with
              content and services available through iSHOP Services. Like many
              websites, we use cookies and other unique identifiers, and we
              obtain certain types of information when your web browser or
              device accesses iSHOP Services and other content served by or on
              behalf of iSHOP on other websites.
            </p>
            <p>
              <strong>Information from Other Sources: </strong> We might receive
              information about you from other sources, such as updated delivery
              and address information from our carriers, which we use to correct
              our records and deliver your next purchase more easily.
            </p>
            <h2 className="my-3">
              For What Purposes Does iSHOP Use Your Personal Information?
            </h2>
            <p>
              We use your personal information to operate, provide, develop, and
              improve the products and services that we offer our customers.
              These purposes include:
            </p>
            <ul>
              <li className="privacy-list">
                <strong>
                  Purchase and delivery of products and services.{" "}
                </strong>
                We use your personal information to take and fulfill orders,
                deliver products and services, process payments, and communicate
                with you about orders, products and services, and promotional
                offers.
              </li>
              <li className="privacy-list">
                <strong>
                  Provide, troubleshoot, and improve iSHOP Services.{" "}
                </strong>
                We use your personal information to provide functionality,
                analyze performance, fix errors, and improve the usability and
                effectiveness of the iSHOP Services.
              </li>
              <li className="privacy-list">
                <strong>Recommendations and personalization. </strong>
                We use your personal information to recommend features,
                products, and services that might be of interest to you,
                identify your preferences, and personalize your experience with
                iSHOP Services.
              </li>
              <li className="privacy-list">
                <strong>Provide voice, image and camera services. </strong>
                When you use our voice, image and camera services, we use your
                voice input, images, videos, and other personal information to
                respond to your requests, provide the requested service to you,
                and improve our services.
              </li>
              <li className="privacy-list">
                <strong>Comply with legal obligations. </strong>
                In certain cases, we collect and use your personal information
                to comply with laws. For instance, we collect from sellers
                information regarding place of establishment and bank account
                information for identity verification and other purposes.
              </li>
            </ul>
          </div>
          <div className="privacy-scroll-btn d-flex justify-content-center">
             <button onClick={scroll} className="btn btn-outline-primary ">Scroll to top</button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Privacy;
