// Write your Character component here
import React, { useState } from "react";
import characters from "../App";
import styled from "styled-components";

const Wrapper = styled.div `
  background-color: #B99976;
  max-width: 30%;
  margin-bottom: 0 auto;
`
const ButtonStyling = styled.button`
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid #FFFFFF;
 margin:0 0.3em 0.3em 0;
 border-radius:0.12em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:black;
 text-align:center;
 transition: all 0.2s;

&:hover{
     color:#000000;
     background-color:#FFFFFF;
}
`
const Character = ({ character }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!character) {
    return null;
  }

  const handleExpand = (e) => {
    setIsExpanded(!isExpanded);
  };
  console.log(character);

  return (
      <Wrapper>
        <h3>{character.name}</h3>
        <ButtonStyling onClick={handleExpand}>Show Character Details</ButtonStyling>
        {isExpanded && (
          <div>
            <p>Birth Year: {character.birth_year} </p>
            <p>Gender: {character.gender}</p>
            <ul>
              Films:
              {character.films.map((film) => (
                  <li>{film}</li>
              ))}
            </ul>
          </div>
        )}
      </Wrapper>
  );
};

export default Character;
