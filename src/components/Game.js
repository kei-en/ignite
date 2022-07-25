import React from "react";
//Styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    )
};

// Styles
const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    h3 {
        padding: 1rem;
    }
    p {
        padding: 0.5rem;
    }
    img {
        width: 100%;
        height: 50vh;
        object-fit: cover;
        border-radius: 0rem 0rem 1rem 1rem;
    }
`;

export default Game;