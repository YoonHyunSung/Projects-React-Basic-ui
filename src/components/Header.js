import React from 'react'
import styled from 'styled-components';
import logo1 from '../images/first.jpg'
const Header = () =>(
    <Container>
            <Element>
                <ShortCut>로그인/회원가입</ShortCut>
                <Logo>
                <img
                width="100%"
                height="100%"
                src={logo1}/>
                </Logo>
                <Search><h1>React Blog</h1></Search>
            </Element>
        </Container>
);
export default Header
const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`
const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`
const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`
const Search = styled.div`
    order: 3;
    width: 880px;
    background-color: #78ffd6;
    text-align: center;
`
const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 80px;
`