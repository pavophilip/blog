import {MDXProvider} from "@mdx-js/react";
import h1 from "@/components/h1";

const components = {
    h1
};

const BlogLayout =({meta, children}) => {
    console.log(meta);
    return  <MDXProvider components={components}>{children}</MDXProvider>
};

export default BlogLayout;