import React from 'react';
import './App.css';
import Box from './components/Box';
/*
  1. 박스 2개 ( 타이틀, 사진, 결과 )
  2. 박스 하단에 가위바위보 버튼
  3. 버튼을 클릭 > 클릭한 아이템이 유저박스에 보임
  4. 버튼을 클릭 > 컴퓨터 아이템이 랜덤하게 선택
  5. 3,4 번 승패 나눔
  6. 결과에 따라 박스테두리색, 텍스트색ㅇ ㅣ변함 / 승리 -파랑 / 패- 회색
*/

//사진 아이템을 저장할 수 있는 객체
const choice = {
  scissors : {name: "Scissors", img: "scissors.png"},
  rock : {name: "Rock", img: "rock.png"},
  papper: {name: "Papper", img: "paper.png"}
}


const play = (useChoice) => {
  console.log("가위바위보 버튼선택",useChoice)
}

function App() {
  return (
    <main>
      <div className='wrap'>
        <Box title="my" />
        <Box title="computer" />      
      </div> 
      <div className='center'>
          <button onClick={()=> play("scissors")}>가위</button>
          <button onClick={()=> play("rock")}>바위</button>
          <button onClick={()=> play("papper")}>보</button>
      </div>
    </main>  
  );
}

export default App;
