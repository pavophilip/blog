import { getArticleFromSlug, getSlug } from "@/utils/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import h1 from "@/components/h1";
import h2 from "@/components/h2";
import p from "@/components/p";

const components = {
  h1,
  h2,
  p,
};

const BlogPost = ({ post: { source, frontMatter } }) => {
  return <MDXRemote {...source} components={components} />;
};

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontMatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontMatter,
      },
    },
  };
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

export default BlogPost;
