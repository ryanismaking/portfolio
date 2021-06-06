import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Home() {
  return (
    <Layout>
      <h1>I’m a generalist at heart</h1>
      
      <p>I’m transitioning to design from a career working with code so I can 
      focus on human-scale problems. I believe my experience gives me a 
      unique perspective and opportunity.</p>

      <p>Currently, I’m a UI developer in <a href="https://realestate.com.au">realestate.com.au</a>’s rad design ops 
      team.</p>

      <p>I snagged a computer science degree with a major in interactive 
      media way back in 2010, which means I know a lot about how to tell 
      computers what to do in excruciating detail and why even that 
      sometimes isn’t enough.</p>

      <p>In my free time I play Nintendo, marathon-watch Star Trek, send my 
      friends funny memes, escape escape rooms, and teach group fitness dance 
      classes.</p>
    </Layout>
  )
}
