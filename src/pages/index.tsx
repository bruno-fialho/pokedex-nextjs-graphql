import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Logo from '../assets/logo.png'
import Settings from '../assets/settings.svg'
import Pokeball from '../assets/pokeball.svg'

import {
  Container,
  Header,
  HeaderImageBox,
  LoginBox,
  LoginImageBox,
  FormBox,
  Input,
  Button
} from '@/styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <Header>
        <HeaderImageBox>
          <Image src={Logo} alt="logo" width={215} height={45} />
        </HeaderImageBox>
        <HeaderImageBox>
          <Image src={Settings} alt="settings" width={30} height={30} />
        </HeaderImageBox>
      </Header>

      <LoginBox>
        <LoginImageBox>
          <Image src={Pokeball} alt="pokeball" width={135} height={135} />
        </LoginImageBox>
        <FormBox>
          <Input placeholder="Seu melhor e-mail" />
          <Button>Acessar</Button>
        </FormBox>
      </LoginBox>
    </Container>
  )
}

export default Home
