import React from 'react'
import styled from "styled-components";

export default function Title() {
    var event = new Date();
    
    return (
        <div>
            <Header>Here's Your Pic of the Day for { event.toLocaleString('en', { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' }) }</Header>
        </div>
    )
}

const Header = styled.h1`
  size: 50px;
  color: red;
`;
