import React from 'react';
import Layout from '../components/Layout/Layout';
import {BiSupport,BiPhoneCall} from 'react-icons/bi';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {
  return (
     <>
        <Layout title={'Ecommerce- Contactus'}>
            <div className="contactus  row align-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-12" >
                     <img src='/images/contactus.jpg' alt='contactus' style={{width:'100%', height:'100%'}}/>
                  </div>
                  <div className="col-xxl-5 col-xl-5 offset-xl-1 my-5 " >
                        <h2 className='mt-3 bg-dark text-light text-center'>CONTACT US</h2>
                        <p className='text-center contact-text'>Any query or issue related to products, feel free to contact us 24x7 </p>
                        <p className='text-center contact-text'><AiOutlineMail/>: www.help@ishop.com</p>
                        <p className='text-center contact-text'><BiPhoneCall/>: 012-567823</p>
                        <p className='text-center contact-text'><BiSupport/>: 1800-5555-88888 (toll-free)</p>
                  </div>
            </div>
        </Layout>
     </>
  )
}

export default Contact