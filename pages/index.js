import Head from "next/head";
import db from "../utils/db";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Meu Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div>
          {posts.map((post) => (
            <Post key={post._id} title={post.title} content={post.content} />
          ))}
        </div>

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await db.collection("posts").find({}).toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
