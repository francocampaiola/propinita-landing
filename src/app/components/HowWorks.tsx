'use client'

import { Box, Button, Container, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from 'react-icons/tb'

const HowWorks = () => {
    return (
        <Flex id='features' justify={'center'} align={'center'} fontFamily={'-apple-system'}>
            <Box as={Container} maxW="7xl" p={4} height={'90vh'}>
                <Heading textAlign={'center'} mt={12} fontSize="4xl" fontWeight="600" mb={8}>
                    ¿Cómo lo hacemos?
                </Heading>
                <Text textAlign={'center'}>
                    Seguí estos simples pasos y empezá a recibir propinas al instante.
                </Text>
                <Flex alignItems={'center'} justify={'center'}>
                    <Flex gap={24}>
                        <Box py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={'white'}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Flex
                                    rounded={'lg'}
                                    justify={'center'}
                                    alignItems={'center'}
                                >
                                    <TbCircleNumber1 size={'100px'} />
                                </Flex>
                                <Stack pt={10} align={'center'}>
                                    <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                                        Creá tu cuenta
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={400} fontSize={'sm'} textAlign={'center'}>
                                            Registrate en Propinita en tan solo unos minutos.
                                            Completá tus datos.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                        <Box py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={'white'}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Flex
                                    rounded={'lg'}
                                    justify={'center'}
                                    alignItems={'center'}
                                >
                                    <TbCircleNumber2 size={'100px'} />
                                </Flex>
                                <Stack pt={10} align={'center'}>
                                    <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
                                        Compartí tu enlace
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={400} fontSize={'sm'} textAlign={'center'}>
                                            Compartí tu enlace único o código QR con tus clientes.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                        <Box py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={'white'}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Flex
                                    rounded={'lg'}
                                    justify={'center'}
                                    alignItems={'center'}
                                >
                                    <TbCircleNumber3 size={'100px'} />
                                </Flex>
                                <Stack pt={10} align={'center'}>
                                    <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                                        Recibí propinas
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={400} fontSize={'sm'} textAlign={'center'}>
                                            Empezá a recibir propinas directamente en tu cuenta.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                        <Box py={12}>
                            <Box
                                role={'group'}
                                p={6}
                                maxW={'330px'}
                                w={'full'}
                                bg={'white'}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                pos={'relative'}
                                zIndex={1}>
                                <Flex
                                    rounded={'lg'}
                                    justify={'center'}
                                    alignItems={'center'}
                                >
                                    <TbCircleNumber4 size={'100px'} />
                                </Flex>
                                <Stack pt={10} align={'center'}>
                                    <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
                                        Retirá tu dinero
                                    </Heading>
                                    <Stack direction={'row'} align={'center'}>
                                        <Text fontWeight={400} fontSize={'sm'} textAlign={'center'}>
                                            Transferí tus propinas a tu cuenta bancaria o billetera digital.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
                <Flex justify={'center'} direction={'column'} gap={6}>
                    <Button w={80} mx={'auto'}>Empezá ahora</Button>
                    <Text textAlign={'center'} fontSize={'sm'} color={'gray.500'}>Registrate gratis y empezá a recibir propinas hoy mismo</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default HowWorks