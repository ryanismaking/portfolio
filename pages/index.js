import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import { getFeaturedSortedPostsData } from '../lib/posts'

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
    <div className="introduction">
      <h1 className="introduction-heading">Show me a good problem.</h1>

      <div className="introduction-text">
        <p>I’m Ryan—a fledgling product designer from Melbourne who cares about 
        creating thoughtful products which balance businesses’ need for 
        sustainability with customers’ desire for progress.</p>
        <p>Currently, I help scale great design in <a href="https://realestate.com.au">
        realestate.com.au</a>’s design ops team. We give our designers and 
        engineers a leg up so they can make 
        awesome shiz. Together, we help millions of Australians find their 
        forever homes.</p>
      </div>
    </div>

      <h2 className="section-heading">Selected work</h2>
      <ul className="work-list">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .introduction {
          margin: 8rem 0 6rem 0;
        }

        .introduction-heading {
          font-size: 5rem;
          line-height: 5rem;
        }

        .introduction-text {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        .section-heading {
          font-size: 2rem;
          line-height: 3rem;
        }

        .work-list {
          list-style: none;
          padding-inline-start: 0;
        }
      `}</style>
    </Layout>
  )
}
