import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"
import { getFeaturedSortedPostsData } from '../lib/posts'
import styled from "styled-components"

const Main = styled.main`
  margin: 10%;
`

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 900;
  margin: 0;

  a { 
    text-decoration: none; 
    color: #232323; 
  }
`

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 900;
  margin: 0 0 12px 0;
`

const Introduction = styled.div`
  font-size: 24px;
  line-height: 36px;
  margin: 36px 0;
  max-width: 400px;
  
  p { 
    margin: 20px 0;
  }
`

const UL = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin: 0;
`

const LI = styled.li`
  line-height: 24px;
  display: flex;
  align-items: start;
  margin-bottom: 4px;

  a {
    color: #1478AF;
  }
`

const Icon = styled.img`
  margin-top: 4px;
  margin-right: 12px;
`

export async function getStaticProps() {
  const allPostsData = getFeaturedSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Ryan is Making</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <H1>
          <Link href="/">Ryan Tessier</Link>
        </H1>

        <Introduction>
          <p>I’m a passionate product designer with a dark secret: I used to be a developer.</p>
          <p>I love Star Trek, Nintendo, teaching group fitness dance classes, and escaping rooms.</p>
        </Introduction>

        <H2>Elsewhere</H2>

        <UL>
          <LI><Icon src="images/twitter.svg" alt="Twitter" /><a href="https://twitter.com/ryanismaking">I tweet about design to get better at design.</a></LI>
          <LI><Icon src="images/linkedin.svg" alt="LinkedIn" /><a href="https://www.linkedin.com/in/rtessier/">I enjoy networking with design folk.</a></LI>
          <LI><Icon src="images/github.svg" alt="GitHub" /><a href="https://github.com/ryanismaking">I continue to code so I get to design more stuff.</a></LI>
        </UL>

        {/* {allPostsData.length > 0 && <H2>Featured work</H2>}
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul> */}

      </Main>
    </Layout>
  )
}
