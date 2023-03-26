import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const ShaderCanvas = dynamic(() => import("./ShaderCanvas/ShaderCanvas"), {
  ssr: false,
});

const GalleryItemContainer = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
`;

const ShaderGalleryItem = ({ shader }) => {
  return (
    <GalleryItemContainer>
      <ShaderCanvas height={300} width={300} fragShader={shader} />
    </GalleryItemContainer>
  );
};

export default ShaderGalleryItem;
