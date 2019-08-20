import styled from "styled-components";

export const BackgroundDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #46D2A3;
    width: 50%;

    @media (width: 750px){
        width: 100%;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10%;
    justify-content: center;
`

export const StyledH1 = styled.h1`
    font-size: 1.6rem;
    color: white;
`

export const StyledP = styled.p`
    font-size: 1rem;
    color: white;
`

export const StyledInput = styled.input`
    border-radius: 15%;
    width: 80%;
    background-color: white;
    color: lightgrey;
`
