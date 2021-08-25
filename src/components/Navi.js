import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Navi = () =>(
    <Nav>
        <NavList>
            <NavItem><Link to='Home'>Home</Link></NavItem>
            <NavItem><Link to='login'>로그인</Link></NavItem>
            <NavItem><Link to = 'join'>회원가입</Link></NavItem>
            <NavItem><Link to = 'course-register'>과목 등록</Link></NavItem>
            <NavItem><Link to = 'online-profile'>프로필</Link></NavItem>
            <NavItem><Link to = 'school-status'>학교현황</Link></NavItem>
        </NavList>
    </Nav>
);
export default Navi
const NavItem = styled.li`
    width: 60px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`
const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`
