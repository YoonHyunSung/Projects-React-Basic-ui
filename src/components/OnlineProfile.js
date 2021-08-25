import React from 'react';
import logo from '../images/first.jpg';


const OnlineProfile = () => (
<div>
    <h1>윤현성</h1>
    <p>이메일 : gustjd6495@gmail.com</p>
    <h2>Who I am?</h2>
    <p>학생입니다<br/>
    반갑습니다</p>
    <h2>Github</h2>
    <ul>
        <li><a href="https://github.com/YoonHyunSung" target="_blank">Github</a></li>
    </ul>
    <h2>Skills</h2>
    <ul>
        <li>사용 언어
            <ul>
                <li><mark>HTML</mark></li>
                <li><mark>CSS</mark></li>
                <li>JAVA</li>
                <li>Javascript</li>
                <li>Oracle</li>
            </ul>
        </li>
        <li>사용 툴
            <ul>
                <li>Eclipse(5years)</li>
                <li>Spring FrameWork(5years)</li>
                <li>Sql Developer(5years)</li>
                <li><b>Visual Studio(1year)</b></li>
            </ul>
        </li>
    </ul>
    <h2>Academic</h2>
    <table border="1">
        <caption>학력 사항</caption>
        <thead>
			<tr>
				<th>출신학교</th>
				<th>전공</th>
				<th>기간</th>
				<th>졸업구분</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>ㅇㅇㅇ고등학교</td>
				<td> (해당사항 없음)</td>
				<td>2003.3 ~ 2006.2</td>
				<td>졸업</td>
			</tr>
			<tr>
				<td>한국교통대학교</td>
				<td>의료IT공학과</td>
				<td>20017.3 ~ 2021.2</td>
				<td>졸업</td>
			</tr>
		</tbody>
    </table>
</div>
)
export default OnlineProfile