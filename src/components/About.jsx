import React from 'react'
import styled from "styled-components";



const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    
`
const ContentWrapper = styled.div`
    flex: 1;
    width: 100%;
    padding: 20px;
    flex-wrap: wrap;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    position: relative;
     `
const ContentWrapperImage = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    filter: saturate(50%);
    `
const ContentDiv = styled.div`
    width: 350px;
    height: 300px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background-color: #ffffff1e;
    backdrop-filter: blur(10px);
    color: white;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    &:hover{
        border: 1px solid white;
    }
`
const ContentTitle = styled.h2`
    height: 20%;
`
const ContentDesc = styled.p`
    height: 80%;
    overflow: auto;
    line-height: 25px;
    font-size: 15px;
    letter-spacing: 1px;
`

const About = () => {
    return (
        <Container>
            <ContentWrapper>
                <ContentWrapperImage src='https://images.unsplash.com/photo-1641806120672-643a30aeda7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2xpdmUlMjBncmVlbiUyMGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                <ContentDiv>
                    <ContentTitle>Why I Code?</ContentTitle>
                    <ContentDesc>Coding is arguably one of the most important skills for current as well as future generations to learn. For young learners, programming helps to gain problem-solving skills to solve a problem in a logical as well as creative way.</ContentDesc>
                </ContentDiv>
                <ContentDiv>
                    <ContentTitle>Where I Learn ?</ContentTitle>
                    <ContentDesc>I am studying in Poornima University and will be continuing for the next 2 years. Choosen BCA as my course and had a great interest in web development and algorithms too.</ContentDesc>
                </ContentDiv>
                <ContentDiv>
                    <ContentTitle>What I Want To Be?</ContentTitle>
                    <ContentDesc>A straight answer might be "A Good software engineer at a good company" Maybe in a service or product based, Depending upon the skill set i'll carry at that time. </ContentDesc>
                </ContentDiv>
            </ContentWrapper>
        </Container>
    )
}

export default About