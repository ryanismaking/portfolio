import Link from 'next/link'
import Head from 'next/head'
import styled from "styled-components"

const A = styled.a`
  cursor: pointer;

  &:hover {
    color: red;
  }
`

const NavigationLink = ({ href, ...props}) => <Link href={href}><A {...props} /></Link>

export default function Layout({ children }) {
  return (
    <>
     <Head>
        <title>Ryan is Making</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <nav className="navigation">
          <div className="navigation-left">
            <NavigationLink className="name" href="/">Ryan Tessier</NavigationLink>
          </div>
          <div className="navigation-right">
            <span className="navigation-link-container"><NavigationLink href="/">Portfolio</NavigationLink></span>
            <span className="navigation-link-container"><NavigationLink href="/about">About</NavigationLink></span>
          </div>
        </nav>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-left">Last updated today.</div>
      </footer>

      <style jsx>{`
        .header {
          height: 5rem;
        }

        .name {

        }

        .navigation {
          height: 100%;
          padding: 0 16vw;
          display: flex;
          justify-content: space-between;
          align-items: center; 
        }

        .navigation-link-container {
          margin-left: 2rem;
        }

        .main {
          padding: 0 16vw;
        }

        .footer {
          height: 5rem;
          padding: 0 16vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 18px;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}