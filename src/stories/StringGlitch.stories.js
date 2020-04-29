import React from 'react';
import StringGlitch from '../component-library/StringGlitch.tsx';

export default {
  title: 'StringGlitch',
  component: StringGlitch,
};

export const Basic = () => <StringGlitch text="StringGlitch" interval={100} />;

export const CustomGlitchChars = () => (
  <StringGlitch text="Custom Glitch Chars" glitchCharacters={["0","1"]} />
);

export const Emoji = () => (
  <StringGlitch text="Emoji Glitch" glitchCharacters={["😀", "😎", "👍", "💯"]} interval={300} />  
);
