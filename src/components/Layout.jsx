import { Outlet } from 'react-router-dom';
import { Box, Divider } from '@chakra-ui/layout';
import { Suspense } from 'react';
import Footer from './Footer';
import { Header } from './Header';
import { useColorModeValue } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  const bgColor = useColorModeValue('gray.200', 'blackAlpha.100');

  return (
    <>
      <Header />
      <Divider />
      <Box as="main" flex={'1 1 auto'} bg={bgColor} height="100vh">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
      <Divider />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
