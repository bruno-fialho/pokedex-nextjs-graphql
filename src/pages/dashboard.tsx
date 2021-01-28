import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../assets/logo.png'
import BigPokemon from '../assets/bigPokemon.png'
import FirstEvolution from '../assets/firstEvolution.jpeg'
import SecondEvolution from '../assets/secondEvolution.jpeg'

import {
  Container,
  Header,
  TopBox,
  ImageBox,
  Input,
  ListBox,
  Content,
  NameBox,
  ContentHeader,
  ContentBox,
  LeftSide,
  BigImageBox,
  TypeBox,
  TypeButton,
  SizeBox,
  HeightBox,
  WeightBox,
  AttributesBox,
  AttributesContentBox,
  AttributesContentLeft,
  AttributesContentCenter,
  AttributesContentRight,
  AttributeButton,
  RightSide,
  EvolutionBox,
  EvolutionImageBox,
  BigDescriptionBox
} from '@/styles/pages/Dashboard'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Header>
        <TopBox>
          <ImageBox>
            <Image src={Logo} alt="logo" width={330} height={70} />
          </ImageBox>

          <p>Everything you wanted to know about</p>
          <p>your favorite pocket monsters!</p>

          <Input placeholder="Search by name or number" />
        </TopBox>

        <ListBox>
          <ul>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#001- Bulbasaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#002- Ivysaur</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>#003- Venusaur</a>
              </Link>
            </li>
          </ul>
        </ListBox>
      </Header>

      <Content>
        <ContentHeader>
          <NameBox>
            <h1>#001 - BULBASAUR</h1>

            <Image src={BigPokemon} alt="bulbasaur" width={50} height={50} />
          </NameBox>

          <p>ICON</p>
        </ContentHeader>

        <ContentBox>
          <LeftSide>
            <BigImageBox>
              <Image
                src={BigPokemon}
                alt="bulbasaur"
                width={370}
                height={345}
              />
            </BigImageBox>

            <TypeBox>
              <h6>Type</h6>
              <TypeButton>
                <span>GRASS</span>
              </TypeButton>
              <TypeButton>
                <span>POISON</span>
              </TypeButton>
            </TypeBox>

            <SizeBox>
              <HeightBox>
                <h6>Height:</h6>
                <p>2&apos;04&apos;&apos; / 0.7m</p>
              </HeightBox>
              <WeightBox>
                <h6>Weight:</h6>
                <p>15.2lbs / 6.9kg</p>
              </WeightBox>
            </SizeBox>

            <AttributesBox>
              <h6>Attributes</h6>

              <AttributesContentBox>
                <AttributesContentLeft>
                  <AttributeButton>
                    <span>45 HP</span>
                  </AttributeButton>

                  <AttributeButton>
                    <span>49 DEF</span>
                  </AttributeButton>
                </AttributesContentLeft>

                <AttributesContentCenter>
                  <AttributeButton>
                    <span>45 SPEED</span>
                  </AttributeButton>

                  <AttributeButton>
                    <span>65 SP.ATK.</span>
                  </AttributeButton>
                </AttributesContentCenter>

                <AttributesContentRight>
                  <AttributeButton>
                    <span>49 ATK.</span>
                  </AttributeButton>

                  <AttributeButton>
                    <span>65SP.DEF.</span>
                  </AttributeButton>
                </AttributesContentRight>
              </AttributesContentBox>
            </AttributesBox>
          </LeftSide>

          <RightSide>
            <EvolutionBox>
              <h6>Evolution</h6>

              <EvolutionImageBox>
                <Image
                  src={FirstEvolution}
                  alt="ivysaur"
                  width={120}
                  height={112}
                />
                <p>Ivysaur</p>
              </EvolutionImageBox>

              <EvolutionImageBox>
                <Image
                  src={SecondEvolution}
                  alt="venusaur"
                  width={120}
                  height={112}
                />
                <p>Venusaur</p>
              </EvolutionImageBox>
            </EvolutionBox>
            <BigDescriptionBox>
              <p>
                Bulbasaur is a small, quadrupedal Pokémon that has blue-green
                skin with darker patches. It has red eyes with white pupils,
                pointed, ear-like structures on top of its head, and a short,
                blunt snout with a wide mouth. A pair of small, pointed teeth
                are visible in the upper jaw when its mouth is open. Each of its
                thick legs ends with three sharp claws. On Bulbasaur&apos;s back
                is a green plant bulb, which is grown from a seed planted there
                at birth. The bulb provides it with energy through
                photosynthesis as well as from the nutrient-rich seeds contained
                within.
                <br />
                <br />
                As mentioned in the anime, starter Pokémon are raised by
                Breeders to be distributed to new Trainers. Having been
                domesticated from birth, Bulbasaur is regarded as both a rare
                and well-behaved Pokémon. It is known to be extremely loyal,
                even after long-term abandonment. Bulbasaur in the anime have
                demonstrated a nurturing instinct towards younger, weaker
                Pokémon, one individual even using its vines to pick up a crying
                Pokémon, gently rocking it back and forth through the air while
                singing a &quot;Bulba-by.&quot;
                <br />
                <br />
                It is found in grasslands and forests throughout the Kanto
                region. However, due to Bulbasaur&apos;s status as starter
                Pokémon, it is hard to come by in the
              </p>
            </BigDescriptionBox>
          </RightSide>
        </ContentBox>
      </Content>
    </Container>
  )
}

export default Dashboard
