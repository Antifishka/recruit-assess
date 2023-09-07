import { Box } from './Box/Box';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from './AppBar';
import { theme } from '../globalStyles/theme';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Box
      position="relative"
      minHeight="100%"
      maxWidth={theme.sizes.maxWidth}
      m="0 auto"
      p={["0 20px", "0 20px", "0 32px"]}>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense> 

      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};