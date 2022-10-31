import React from 'react'
import styled from 'styled-components'

const FlexDiv = styled.div`
    display: flex;
    gap:10px;
`

const Container = styled.div`  
    width: 100%;
    background-color: #829460;

 `
const TopDiv = styled.div` 
    height: 60px;
    display: grid;
    place-items: center;
    padding: 20px 5px;
    color: white;
    
`
const SkillHeading = styled.h1`
    font-size: 30px;
    font-family: 'Press Start 2P', cursive;
 `

const BottomDiv = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px;
    gap: 30px;
`

const SingleSkill = styled.div`
    width: 300px;
    height: 150px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 10px #404040;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    transition: 0.3s ease;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid black;
        cursor: pointer;
    }
`
const SkillName = styled.h2`
    font-size: 20px;

`
const SkillYears = styled.p` 
color: #5c5c5c;
font-size: 15px;
`
const SkillProjects = styled.p` 
color: #00ca00;
font-size: 15px;
`
const PercentageBar = styled.div`
    width: 90%;
    height: 20px;
    border: 1px solid #505050;
    border-radius: 20px;
`
const PercentageInner = styled.div` 
    width: ${props => props.per}%;
    background-image: linear-gradient(#607638,#829460,#607638);
    height: 100%;
    border-radius: 20px;
`

const Skills = () => {
    return (
        <Container>
            <TopDiv>
                <SkillHeading> Skills </SkillHeading>
            </TopDiv>
            <BottomDiv>
                {/* React */}
                <SingleSkill>
                    <SkillName>React</SkillName>
                    <FlexDiv>
                        <SkillYears>6 Months</SkillYears> <SkillProjects>5+ Projects</SkillProjects>
                    </FlexDiv>
                    <PercentageBar>
                        <PercentageInner per={"60"} />
                    </PercentageBar>
                </SingleSkill>
                {/* Node */}
                <SingleSkill>
                    <SkillName>NodeJS</SkillName>
                    <FlexDiv>
                        <SkillYears>6 Months</SkillYears> <SkillProjects>7+ Projects</SkillProjects>
                    </FlexDiv>
                    <PercentageBar>
                        <PercentageInner per={"60"} />
                    </PercentageBar>
                </SingleSkill>
                {/* Javascript */}
                <SingleSkill>
                    <SkillName>JavaScript</SkillName>
                    <FlexDiv>
                        <SkillYears>1 Year</SkillYears> <SkillProjects>20+ Projects</SkillProjects>
                    </FlexDiv>
                    <PercentageBar>
                        <PercentageInner per={"70"} />
                    </PercentageBar>
                </SingleSkill>
                {/* Css */}
                <SingleSkill>
                    <SkillName>CSS</SkillName>
                    <FlexDiv>
                        <SkillYears>1 Year</SkillYears> <SkillProjects>50+ Projects</SkillProjects>
                    </FlexDiv>
                    <PercentageBar>
                        <PercentageInner per={"80"} />
                    </PercentageBar>
                </SingleSkill>
                {/* C++ */}
                <SingleSkill>
                    <SkillName>C++</SkillName>
                    <FlexDiv>
                        <SkillYears>1 Year</SkillYears> <SkillProjects>150+ Problems</SkillProjects>
                    </FlexDiv>
                    <PercentageBar>
                        <PercentageInner per={"65"} />
                    </PercentageBar>
                </SingleSkill>
                {/* DSA  */}
                <SingleSkill>
                    <SkillName>{`DSA (C++)`}</SkillName>
                    <FlexDiv>
                        <SkillYears>On Going..</SkillYears> <SkillProjects>30+ Problems</SkillProjects>
                    </FlexDiv>
                    <PercentageBar>
                        <PercentageInner per={"30"} />
                    </PercentageBar>
                </SingleSkill>
            </BottomDiv>
        </Container>
    )
}

export default Skills