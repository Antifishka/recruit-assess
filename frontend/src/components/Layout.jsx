import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from './AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div className='flex flex-col h-full max-w-[1280px] my-0 mx-auto px-[20px] md:px-6'>
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense> 

      <Toaster position="top-right" reverseOrder={false} />
      <footer></footer>
    </div>
  );
};