import * as React from 'react';
import styled from 'styled-components';
import './style.css';

const Container = styled.div``;
const Label = styled.label`
 display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const Input = styled.input`
  appearance: none;
  position:relative;
  border: max(2px, 0.1rem) solid gray;
  border-radius: 20px;
  width: 3rem;
  height: 1.4rem;
  &:before{
    content: "";
    position: absolute;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: black;
    transition: left 250ms linear;
  }
  &:checked:before{
    background-color: white;
    left: 2em;
  }
  &:checked{
    background-color: black;
    border-color: black;
  }
`;
const Span = styled.span``;

export default function App() {
  return (
    <Container>
      <Label>
        <Input role="switch" type="checkbox" />
        <Span>알람</Span>
      </Label>
    </Container>
  );
}
