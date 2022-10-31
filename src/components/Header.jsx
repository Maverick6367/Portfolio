import React from 'react'
import { keyframes } from "styled-components";
import styled from "styled-components";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #829460;
`
const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const SmallHeading = styled.h1`
    font-size: 40px;
    color: white;
    font-weight: 200;

    @media (max-width:320px) {
        font-size: 25px;
    }
    `
const LargeHeading = styled.h1`
    font-size: 70px;
    font-family: 'Press Start 2P', cursive;
    color: white;
    
        @media (max-width:320px) {
            font-size: 40px;
        }
    `
const DownArrowAnimation = keyframes`
        0%{
            margin-top: 0px;
        }
        100%{
            margin-top: 10px;
        }
        `
const DownArrowDiv = styled.div`
    color:white;
    animation: ${DownArrowAnimation}  0.5s 0ms infinite alternate; 
`

const Header = () => {
    return (
        <Container>
            <MainDiv>
                <SmallHeading>All I Do Is</SmallHeading>
                <LargeHeading>Code</LargeHeading>
                <DownArrowDiv>
                    <ArrowDownwardIcon fontSize='large' />
                </DownArrowDiv>
            </MainDiv>
        </Container>
    )
}

export default Header