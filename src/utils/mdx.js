import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "src/data/blog");

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getArticleFromSlug(slug) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  return {
    content,
    frontMatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  };
}

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join("src/data/blog"));

  return articles.reduce((allArticles, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join("src/data/blog", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allArticles,
    ];
  }, []);
}
