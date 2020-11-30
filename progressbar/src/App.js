import React from 'react';
import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const Background = styled.div`
  overflow: hidden;
  position: relative; 
  width: 100%;
  height: 56px; 
  border-radius: 1rem;
  background: linear-gradient(90deg, #00c4cc, #7d2ae8);
  `;

const bubbles = [];
var count = 0;

for (let i = 0; i < 15; i++) {
  const size = `${getint(20, 40)}px`;
  bubbles.push({
    opacity: `0.${getint(20, 50)}`,
    bottom: `-${getint(20, 60)}px`,
    left: `${getint(count - 10, count + 10)}px`,
    width: size,
    height: size,
  });
  count = count + 50;
}

const blockerAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(25%);
  }
  66% {
    trasform: translateX(55%);
  }
  100% {
    transformL translateX(100%);
  }
  `;

const Blocker = styled.div`
  position, absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #03000a;
  transform: translateX(100);
  animation: ${blockerAnimation} 5s;
`;

const bubbleMove = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100px); }
`;

const bubbleScale = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(0); }
`;

const BubbleWrapper = styled.div`
  position: absolute;
  animation: ${bubbleMove} 3s 2 ease-out;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background: white;
  transform: scale(0);
  animation: ${bubbleScale} 3s 2;
`;