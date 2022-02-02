/** @jsxImportSource @emotion/react */

import React from 'react';

import { css } from '@emotion/react';

function ArticleText(props) {
  const styles = css`
    margin: 0;
    font-size: 18px;
    color: black;
  `
  return <p css={styles} {...props}>{props.children}</p>;
}

function FootnoteText(props) {
  const styles = css`
    font-size: 12px;
    color: gray;
    font-variant: small-caps;
  `;
  return <ArticleText css={styles} className="footnote">{props.children}</ArticleText>;
}

function Button(props) {
  const styles = css`
    color: ${props.secondary ? 'royalblue' : 'snow'};
    background-color: ${props.secondary ? 'whitesmoke' : 'royalblue'};
    padding: 10px;
    border: 2px solid royalblue;
    cursor: pointer;

    &:hover {
      background-color: gainsboro;
    }
  `;
  return <button css={styles}>{props.children}</button>;
}

function PhotoCard(props) {
  const styles = css`
    display: inline-block;
    border: 1px solid darkgray;
    padding: 5px;
    img {
      max-width: 100px;
    }
    p {
      text-align: center;
    }
  `;
  return (
    <div css={styles}>
      <img src={props.url} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}

const pet = "cat";
const str = `I have a ${pet}`;

const baseStyles = css`
  border: 2px solid black;
  background-color: magenta;
`;

const warningStyles = css`
  border-color: red;
  color: orangered;
  background-color: papayawhip;
`;

const color = "olivedrab";
const styles = css`
  background-color: ${color};
  color: mediumvioletred;
  margin: 0;
  padding: 10px;
  ${baseStyles}
`;

const objectStyles = {
  backgroundColor: 'floralwhite',
  color: 'firebrick',
}

function App() {
  return (
    <div>
      <h1 css={styles}>What a boring app...</h1>
      <p><Button>Button 1</Button></p>
      <p><Button secondary>Button 2</Button></p>
      <PhotoCard url="http://placekitten.com/480/480" caption="Kitty" />
      <p css={objectStyles}>Styled with an object</p>
      <ArticleText>This is an article</ArticleText>
      <FootnoteText>This is a footnote</FootnoteText>
      <p css={[baseStyles, warningStyles]}>This is a warning</p>
    </div>
  );
}

export default App;
