'use client'

import {
  Box,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Badge,
} from '@chakra-ui/react'
import { RiApps2Fill, RiFundsBoxLine, RiGift2Line, RiHistoryLine, RiNotification2Line, RiProfileLine, RiRssFill, RiSecurePaymentLine } from 'react-icons/ri'

interface FeatureProps {
  logo: React.ReactNode,
  heading: string
  text: string,
  badge?: React.ReactNode
}

const Feature = ({ logo, heading, text, badge }: FeatureProps) => {
  return (
    <GridItem>
      <Flex justify={'center'} mb={2}>
        {logo}
      </Flex>
      <chakra.h3 fontSize="xl" textAlign={'center'} mb={2} fontWeight="600">
        {heading}
        {badge}
      </chakra.h3>
      <chakra.p textAlign={'center'}>{text}</chakra.p>
    </GridItem>
  )
}

export default function Features() {
  return (
    <Flex id='features' justify={'center'} align={'center'} fontFamily={'-apple-system'}>
      <Box as={Container} maxW="7xl" p={4} height={'90vh'}>
        <chakra.h2 textAlign={'center'} fontSize="4xl" fontWeight="600" mb={8}>
          Características
        </chakra.h2>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            logo={<RiHistoryLine size={50} color='#B49B24' />}
            heading={'Historial de propinas'}
            text={'Muestra un registro detallado de todas las propinas recibidas, incluyendo la fecha, el monto y el remitente, para que los usuarios puedan mantener un seguimiento preciso de sus ingresos.'}
          />
          <Feature
            logo={<RiRssFill size={50} color='#B49B24' />}
            heading={'Integración con RRSS'}
            text={'Comparte fácilmente tu enlace de Propinita en plataformas como Facebook, Twitter o Instagram para aumentar tu visibilidad y tus oportunidades de recibir propinas.'}
          />
          <Feature
            logo={<RiApps2Fill size={50} color='#B49B24' />}
            heading={'Multiplataforma'}
            text={'Accede a Propinita desde cualquier dispositivo, ya sea un smartphone, tablet o computadora, gracias a las tecnologías de punta que utilizamos.'}
          />
          <Feature
            logo={<RiSecurePaymentLine size={50} color='#B49B24' />}
            heading={'Integración de pagos'}
            text={'Retira tus propinas de forma rápida y segura a tu cuenta bancaria o a servicios de pago populares como MercadoPago, con total comodidad.'}
          />
          <Feature
            logo={<RiNotification2Line size={50} color='#B49B24' />}
            heading={'Notificaciones push'}
            badge={<Badge colorScheme='yellow'>Próximamente</Badge>}
            text={'Recibe alertas instantáneas sobre nuevas propinas o actualizaciones importantes en la aplicación, manteniéndote siempre al tanto de tus ingresos.'}
          />
          <Feature
            logo={<RiProfileLine size={50} color='#B49B24' />}
            heading={'Modificación de perfil'}
            badge={<Badge colorScheme='yellow'>Próximamente</Badge>}
            text={'Personaliza tu perfil mostrando tu personalidad y aumentando tu conexión con tus seguidores y posibles propinadores.'}
          />
          <Feature
            logo={<RiFundsBoxLine size={50} color='#B49B24' />}
            heading={'Estadísticas avanzadas'}
            badge={<Badge colorScheme='yellow'>Próximamente</Badge>}
            text={'Visualiza gráficos e informes detallados sobre tus propinas recibidas, lo que te permite comprender mejor tus ingresos y tomar decisiones informadas.'}
          />
          <Feature
            logo={<RiGift2Line size={50} color='#B49B24' />}
            heading={'Sistema de recompensas'}
            badge={<Badge colorScheme='yellow'>Próximamente</Badge>}
            text={'Desbloquea beneficios adicionales al alcanzar hitos de propinas o participar en desafíos de la comunidad, incentivando tu participación activa.'}
          />
        </Grid>
      </Box>
    </Flex>
  )
}
