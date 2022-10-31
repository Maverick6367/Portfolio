import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { keyframes } from "styled-components";


const FlexDiv = styled.div`
    display: flex;
    gap:20px;
`
const Container = styled.footer`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #545f3f;
    color: white;
    position: relative;
    @media (max-width:640px) {
        height: 450px;
    }
`
const TopSection = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
const FooterHeading = styled.h1`
        font-size: 20px;
        letter-spacing: 1px; 
        width: 100%;
        padding: 0px 50px;
        @media (max-width:685px) {
        font-size: 20px;
    }
        
    `
const BottomSection = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    `
const FooterContent = styled.p`
    font-size: 15px;
    color: #b5b5b5; 
    width: 90%;
    overflow: auto;
    word-wrap:break-word;
    hyphens: auto;
    display: grid;
    place-items:center;
    padding: 0px 30px;
    min-height: 80px;
    line-height: 25px;
    letter-spacing: 0.5px;

    `

const DownArrowAnimation = keyframes`
0%{
    bottom: 55px;
}
100%{
    bottom: 60px;
}
`
const GoToTop = styled.span`
    position: absolute;
    bottom: 50px;
    right: 50px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
    background-color: #ffffff3d;
    cursor: pointer;
    animation: ${DownArrowAnimation}  0.3s 0ms infinite alternate; 
`
const GOTOTOPFUNC = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const Footer = () => {
    return (
        <Container>
            <TopSection>
                <FooterHeading>{`This Is Mohit, I Am Moving Forword To Learn New Things Daily :)`}</FooterHeading>
            </TopSection>
            <BottomSection>
                <FooterContent>
                    If you reach down to here you might like me and also want me to help you to share my experiences and yours as well too. Go and check out what the works i have done in recent months, If Want me to be a part of your project you can always mail me at mohit4bug@gmail.com.
                </FooterContent>
                <FlexDiv>
                    <a style={{ color: "white" }} href="https://www.linkedin.com/in/developermohitmadeforbugs/"> <LinkedInIcon fontSize='large' /> </a>
                    <a style={{ color: "white" }} href="https://github.com/Maverick6367"> <GitHubIcon fontSize='large' /> </a>
                    <a style={{ color: "white" }} href="https://www.instagram.com/maverick.4_/"> <InstagramIcon fontSize='large' /> </a>
                </FlexDiv>
            </BottomSection>
            <GoToTop onClick={GOTOTOPFUNC}>
                <ArrowUpwardIcon />
            </GoToTop>
        </Container>
    )
}

export default Footer