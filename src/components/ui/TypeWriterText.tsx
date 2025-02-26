"use client";

import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";

interface TypeWriterTextProps {
  className?: string;
  AnimatatedWords: string[];
}
const TypeWriterText = (props: TypeWriterTextProps) => {
  const { AnimatatedWords } = props;

  const [text] = useTypewriter({
    words: AnimatatedWords,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 400,
    deleteSpeed: 150,
  });
  return (
    <div>
      <span className="text-gold font-poppins text-[72px] font-black leading-[88px] mob:text-[56px] mob:leading-[72px] mob:text-center">
        {text}
      </span>
      <Cursor cursorColor="#F5D06F" />
    </div>
  );
};

export default TypeWriterText;
