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

            <h2 className='mt-24 md:mt-30 lg:mt-36 text-semibold text-l md:text-xl text-center'>
                Welcome to Recruit Assess
            </h2>

            <img src={imgPath}
                srcSet={imgURL}
                alt="owl"
                width="96px"
                className='mx-auto'/>
            
            <NavLink to="/register"
                className="text-background border-b hover:text-accent focus:text-accent transition duration-300 ease-in-out">
                Don&apos;t have an account? Sign Up
            </NavLink>
        </main>
    );
}