'use client'

import {
  Box,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

import logoPropinita from '@/../public/logo.svg'
import Image from 'next/image'

const Logo = (props: any) => {
  return (
    <Image src={logoPropinita} alt='Logo' width={90} />
  )
}

export default function LargeWithLogoCentered() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2024 Propinita. Todos los derechos reservados.
        </Text>
      </Box>
    </Box>
  )
}
