import styled from "@emotion/styled";
import { animated, config, useSpring } from "react-spring";
import { useState } from "react";

const Container = styled.div`
  padding: 32px;
`;

const Ball = animated(styled.div`
  width: 64px;
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 50%;
`);

const SpringExample = () => {
  const [x, setX] = useState(0);
  const styles = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 150,
    },
    loop: true,
    config: {
      ...config.wobbly,
      mass: 2,
    },
    onChange: ({ value }) => {
      setX(value.x.toFixed(2));
    },
  });

  return (
    <Container>
      <div>
        <Ball style={styles} />
      </div>
      <pre>x: {x}</pre>
    </Container>
  );
};

export default SpringExample;
