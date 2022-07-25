import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
//Styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, upcoming, newGames } = useSelector(state => state.games);

    return (
        <GameList>
            <h2>Upcoming games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game 
                        name={game.name} 
                        released={game.released} 
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    )
};

// Styles
const GameList = styled(motion.div)`
    padding: 0rem 2.5rem;
    h2 {
        padding: 2.5rem 0rem
    }

`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,.9fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.5rem;

`;

export default Home;