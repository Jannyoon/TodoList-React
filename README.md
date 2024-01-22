# [React] To Do List 만들기
https://lighthearted-ganache-006218.netlify.app


## 2024.01.19 기능
- 할 일 추가, 삭제 
- 등록했던 모든 일, 이미 끝난 일, 아직 해야 하는 일 filter 지원
- 낮 모드, 밤 모드 지원 
- 로컬스토리지에 데이터 저장.
(탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있음.)

## 2024.01.20 추가 구현
- Enter 후 To do list 추가
- 야간 모드 localStorage 저장
- 이미 한 일들 한 번에 삭제 기능 구현
- 빈 칸 or 공백문자열 삭제 후 To do list 추가
- uuidv4를 통해 고유 id 저장

## 2024.01.22 코드 수정
- 낮 모드, 밤 모드 props 전달 => useContext 이용하는 것으로 코드 수정

  
<hr>

## 실행 이미지
![image](https://github.com/Jannyoon/TodoList-React/assets/149743716/b28bf7c5-202d-43d7-8f64-f1044c576f62)
![image](https://github.com/Jannyoon/TodoList-React/assets/149743716/96989470-f0ec-4aae-ba37-f01429a5cbc8)
![image](https://github.com/Jannyoon/TodoList-React/assets/149743716/2564f613-7114-4ee9-b2d8-b75683020db3)


<hr>

## 개선해야 할 부분 
~~1) 아이템을 Add 할 때 버튼을 눌러야만 아이템이 추가돼서 불편함<br>
=>Enter를 눌렀을 때도 Add가 될 수 있도록 **form 태그**를 이용할 것~~ **=>2024.01.20 update**

~~2) 아무것도 입력하지 않았을 때, 또는 space만 입력되었을 때는 할 일이 추가되지 않도록 개선할 것.<br>
=>text.trim() 이용~~ **=>2024.01.20 update**

~~3) useContext 구현 연습 필요.<br>
=>useContext를 사용하면 props drilling을 해결할 수 있을 것.<br>
다음 프로젝트에선 useContext를 적극적으로 사용해볼 예정~~ **=>2024.01.22 update**

~~4) 낮, 밤 모드도 localStorage에 저장되면 좋을 것 같음~~ **=>2024.01.20 update**
