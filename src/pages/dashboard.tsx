import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'

import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import Logo from '../assets/logo.png'
import BigPokemon from '@/assets/bigPokemon.png'
import FirstEvolution from '@/assets/firstEvolution.jpeg'
import SecondEvolution from '@/assets/secondEvolution.jpeg'
import {
  Container,
  Header,
  TopBox,
  ImageBox,
  Input,
  ButtonGroup,
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

interface PokemonItem {
  name: string
  id: number
  url: string
}

interface PokemonList {
  results: PokemonItem[]
}

interface SpeciesProps {
  url: string
}
interface SpritesProps {
  front_default: string
}

interface StatProps {
  name: string
}

interface StatsProps {
  base_stat: number
  stat: StatProps
}

interface TypeProps {
  name: string
}

interface TypesProps {
  type: TypeProps
}
interface PokemonInfo {
  height: number
  id: number
  name: string
  species: SpeciesProps
  sprites: SpritesProps
  stats: StatsProps[]
  types: TypesProps[]
  weight: number
}

export default function Home({ results }: PokemonList) {
  const [selectedPokemonName, setSelectedPokemonName] = useState('bulbasaur')
  const [selectedPokemonInfo, setSelectedPokemonInfo] = useState(
    {} as PokemonInfo
  )

  function formatID(id: number): string {
    return ('00' + id).slice(-3)
  }

  const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  // const client = new ApolloClient({
  //   uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  //   cache: new InMemoryCache()
  // })

  // useEffect(() => {
  //   async function getPokemonInfo() {
  //     const client = new ApolloClient({
  //       uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  //       cache: new InMemoryCache()
  //     })

  //     const { data } = await client.query({
  //       query: gql`
  //         query pokemon($name: String!) {
  //           pokemon(name: $name) {
  //             id
  //             name
  //             height
  //             weight
  //             sprites {
  //               front_default
  //             }
  //             types {
  //               type {
  //                 name
  //               }
  //             }
  //             species {
  //               url
  //             }
  //             stats {
  //               base_stat
  //               stat {
  //                 name
  //               }
  //             }
  //           }
  //         }
  //       `,
  //       variables: {
  //         name: selectedPokemonName
  //       }
  //     })

  //     setSelectedPokemonInfo(data)
  //     // console.log(selectedPokemonInfo)
  //   }
  //   getPokemonInfo()
  // }, [setSelectedPokemonName])

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

        <ButtonGroup>
          {results.map((pokemon: PokemonItem) => {
            return (
              <button
                key={formatID(pokemon.id)}
                onClick={() => setSelectedPokemonName(pokemon.name)}
              >
                <span>{`#${formatID(pokemon.id)} - ${capitalize(
                  pokemon.name
                )}`}</span>
              </button>
            )
          })}
        </ButtonGroup>
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

export const getStaticProps: GetStaticProps<PokemonList> = async context => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          results {
            name
            id
            url
          }
        }
      }
    `,
    variables: {
      limit: 151,
      offset: 0
    }
  })

  return {
    props: {
      results: data.pokemons.results
    }
  }
}
