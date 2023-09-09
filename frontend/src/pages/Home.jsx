import { Helmet } from 'react-helmet';
import imgPath from '../assets/images/owl.png';
import imgPathRetina from '../assets/images/owl@2x.png';
import { NavLink } from "react-router-dom";

export default function Home() {
    const imgURL = `${imgPath} 1x, ${imgPathRetina} 2x`;

    return (
        <main className='text-center'>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <h2 className='mt-24 sm:mt-30 md:mt-40 lg:mt-46 mb-8 font-semibold text-m sm:text-l md:text-xl text-center'>
                Welcome to Recruit Assess
            </h2>

            <img src={imgPath}
                srcSet={imgURL}
                alt="owl"
                width="96px"
                className='mx-auto mb-8'/>
            
            <NavLink to="/register"
                className="text-background border-b hover:text-accent focus:text-accent transition duration-300 ease-in-out">
                Don&apos;t have an account? Sign Up
            </NavLink>
        </main>
    );
}