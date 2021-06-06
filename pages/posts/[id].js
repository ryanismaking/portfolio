import Layout from '../../components/layout'
import Link from 'next/link'
import Head from 'next/head'
import { getAllPostIds, getPostById, markdownToHtml } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const post = getPostById(params.id)
  const content = await markdownToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      }
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ post }) {
  return (
    <Layout>
      <h1 className="post-title">{post.meta.title}</h1>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content}} />
    </Layout>
  )
}