import { createGlobalStyle } from 'styled-components';

import Montserrat from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

export const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('truetype');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat Medium';
    src: url(${MontserratMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat Semi Bold';
    src: url(${MontserratSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
}  
`;