import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Feature from './components/Features';
import Testimonial from './components/Testimonials';
import LargeWithLogoCentered from './components/Footer';
import { Box, Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex justifyContent={'center'} scrollBehavior={'smooth'}>
      <Box maxWidth={'1200px'}>
        <Navbar />
        <Hero />
        <Feature />
        <Testimonial />
        <LargeWithLogoCentered />
      </Box>
    </Flex>
  );
}
