import { Helmet } from 'react-helmet';
import { Box } from "../components/Box/Box";
import { theme } from '../globalStyles/theme';
import imgPath from '../assets/images/twitter.png';
import imgPathRetina from '../assets/images/twitter@2x.png';
import { NavLink } from "react-router-dom";

export default function Home() {
    const imgURL = `${imgPath} 1x, ${imgPathRetina} 2x`;

    return (
        <Box minHeight= 'calc(100vh - 50px)'
            display='flex'
            flexDirection='column'
            alignItems= 'center'
            justifyContent='center'
            as="main">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Box fontWeight= '700'
                fontSize={[theme.fontSizes.l, theme.fontSizes.l, theme.fontSizes.xl]}
                textAlign='center'
                color={theme.colors.mainText}
                as="h1">
                Welcome to Recruit Assess
            </Box>
            <img src={imgPath}
                srcSet={imgURL}
                alt="tweetsbook"
                width="200px" />
            
            <NavLink to="/register"
                className="text-background border-b hover:text-accent focus:text-accent transition duration-300 ease-in-out">
                Don&apos;t have an account? Sign Up
            </NavLink>
        </Box>
    );
}