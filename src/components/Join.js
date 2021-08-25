import React from 'react';
const color = {color:'red'};
const Join = () =>(
<div>
    <h1>회원 가입을 환영합니다</h1>
    <form>
        <ul>
            <li>
                <label>
                    아이디: <input type="text" id="user_id" size="1" minlength="4" maxlength="15"></input>
                    <small style={color} >4~15자리 이내의 영문과 숫자</small>
                </label>
            </li>
            <li>
                <label>
                    이메일: <input type ="email" id="user_pwd" ></input>
                </label>
            </li>
            <li>
                <label>
                    비밀번호: <input type="password" id="user_pwd"></input>
                </label>
            </li>
            <li>
                <label>
                    비밀번호 확인: <input type="password" id="check_pwd"></input>
                </label>
            </li>
            <li>
                <input type="submit" value="회원가입"></input>
            </li>
        </ul>
    </form>
</div>
)
export default Join
