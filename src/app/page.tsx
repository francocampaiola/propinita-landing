import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Feature from './components/Features';
import Testimonial from './components/Testimonials';
import LargeWithLogoCentered from './components/Footer';
import { Box, Divider, Flex } from '@chakra-ui/react';
import HowWorks from './components/HowWorks';

export default function Home() {
  return (
    <Flex justifyContent={'center'} scrollBehavior={'smooth'}>
      <Box maxWidth={'1200px'}>
        <Navbar />
        <Hero />
        <Feature />
        <HowWorks />
        <Testimonial />
        <LargeWithLogoCentered />
      </Box>
    </Flex>
  );
}
