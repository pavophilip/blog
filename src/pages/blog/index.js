import { getAllArticles } from "@/utils/mdx";
import BlogListItem from "@/components/BlogListItem";
import styled from "@emotion/styled";
import H1 from "@/components/h1";

const BlogLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const BlogContainer = styled.div`
  width: 100%;
  max-width: 720px;
`;

const BlogArticles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PageTitle = styled(H1)``;

const BlogTags = styled.div`
  display: flex;
  align-items: center;
`;

const Blog = ({ posts }) => {
  return (
    <BlogLayout>
      <BlogContainer>
        <H1>My Blog</H1>
        <BlogTags></BlogTags>
      </BlogContainer>
      <BlogContainer>
        <BlogArticles>
          {posts.map((post) => {
            return (
              <BlogListItem
                key={post.slug}
                slug={post.slug}
                thumb={post.image}
                title={post.title}
                readingTime={post.readingTime}
              />
            );
          })}
        </BlogArticles>
      </BlogContainer>
    </BlogLayout>
  );
};

export async function getStaticProps() {
  const articles = await getAllArticles();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
}

export default Blog;
