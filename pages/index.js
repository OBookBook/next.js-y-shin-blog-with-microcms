// http://localhost:3000/
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { client } from '@/libs/client'

// SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  // console.log(data);
  /*
{
  contents: [
    {
      id: 'b-l4j17to',
      createdAt: '2023-06-07T03:56:45.340Z',
      updatedAt: '2023-06-07T03:56:45.340Z',
      publishedAt: '2023-06-07T03:56:45.340Z',
      revisedAt: '2023-06-07T03:56:45.340Z',
      title: 'はじめてのブログ投稿です。',
      body: '<h1 id="hf85efb2e94"><strong>Next.jsを学んでいます。</strong></h1><p>プログラミングが趣味です。</p><figure><img src="https://images.microcms-assets.io/assets/d0666b52ba42430a988d312494c4e699/6648b638822342318a5982de235521f0/ggagsdgsdgasdgsgs.png" alt="" width="430" height="160"></figure><p>私のGithubをチェックしてください。</p> <p><a href="https://github.com/OBookBook">https://github.com/OBookBook</a></p>'
    }
  ],
totalCount: 1,
  offset: 0,
    limit: 10
}
*/
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className='styles.container'>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  );
}
