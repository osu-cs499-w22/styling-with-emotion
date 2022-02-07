import styled from '@emotion/styled/macro';

const breakpoints = {
  sm: 640,
  lg: 1024
};

const Title = styled.h1`
  background-color: lavenderblush;
  color: mediumvioletred;
  margin: 0;
  padding: 10px;
`;

const Button = styled.button`
  color: ${props => props.secondary ? 'royalblue' : 'snow'};
  background-color: ${props => props.secondary ? 'whitesmoke' : 'royalblue'};
  padding: 10px;
  border: 2px solid royalblue;
  cursor: pointer;

  &:hover {
    background-color: gainsboro;
  }

  @media (max-width: ${breakpoints.sm}px) {
    font-size: 48px;
  }

  @media (min-width: ${breakpoints.sm + 1}px) && (max-width: ${breakpoints.lg}px) {
    font-size: 32px;
  }
`;

const Child = styled.div`
  color: tomato;
`;

const Parent = styled.div`
  ${Child} {
    color: springgreen;
  }
`;

function App() {
  return (
    <div>
      <Title>This is the title</Title>
      <p><Button>Button 1</Button></p>
      <p><Button secondary>Button 2</Button></p>
      <Child>Outside Parent</Child>
      <Parent>
        <Child>Inside Parent</Child>
      </Parent>
    </div>
  );
}

export default App;
