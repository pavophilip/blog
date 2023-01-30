import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";
import h2 from "@/components/h2";
import span from "@/components/span";
import Tag from "@/components/Tag";
import small from "@/components/small";
import Link from "next/link";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: inherit;
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Thumb = styled(Image)`
  flex-shrink: 0;
`;

const Title = styled(h2)``;

const Description = styled(span)``;

const Tags = styled.div`
  display: flex;
  gap: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Meta = styled.div`
  display: flex;
  gap: 8px;
`;

const PostDate = styled(small)``;
const PostReadTime = styled(small)``;

const BlogListItem = ({ thumb, slug, title, readingTime }) => {
  return (
    <Container href={`/blog/${slug}`}>
      <Thumb src={thumb} alt={`thumb-slug`} width={136} height={136} />
      <PostDetails>
        <Meta>
          <PostDate>January 11, 2023</PostDate>
          <PostReadTime>{readingTime}</PostReadTime>
        </Meta>
        <Content>
          <Title>{title}</Title>
          <Description>And that's a good thing.</Description>
        </Content>

        <Tags>
          <Tag>#animation</Tag>
          <Tag>#react-spring</Tag>
        </Tags>
      </PostDetails>
    </Container>
  );
};

export default BlogListItem;
