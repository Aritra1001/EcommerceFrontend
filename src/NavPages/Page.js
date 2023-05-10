import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Page = () => {
  return (
     <>
        <Layout title={'Go back- page not found'}>
            <div className="container pnf">
                <h1 className='pnf-head'>404</h1>
                <h2 className='pnf-warn'>OOPS! Page Not Found</h2>
                <Link to="/" className='btn btn-outline-dark my-3 pnf-btn'>Go Back</Link>
            </div>
        </Layout>
     </>
  )
}

export default Page