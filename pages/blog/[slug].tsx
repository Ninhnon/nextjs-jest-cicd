import { useRouter } from 'next/router';
import Head from 'next/head';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>Blog Post: {slug}</title>
      </Head>
      <h1>Blog Post: {slug}</h1>
    </div>
  );
} 