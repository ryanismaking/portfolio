import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"
import { getSortedPostsData } from '../lib/posts'

const Avatar = () => (
  <Image
    src="/images/ryan.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Ryan Tessier"
  />
)


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
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

      <main>
        <h1>
          <Link href="/">Ryan Tessier</Link>
        </h1>

        <Avatar/>

        <p>
          I’m a passionate product designer with a dark secret: I used to be a developer. I love Star Trek, Nintendo, teaching group fitness dance classes, and escaping rooms.
        </p>

        <h2>Featured work</h2>
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
        </ul>
      </main>
    </Layout>
  )
}
