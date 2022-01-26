- 렌더링(Render)
    - 페이지에 UI를 띄워주는 작업
    - React의 장점 : 오로지 바뀐 부분만 리렌더링해줌!
 
- 컴포넌트
    - html에 컴포넌트 삽입 시 대문자로! ex) <Title/>

- State
    - 기본적으로 데이터가 저장되는 곳
    - useState -> [data, modifier] 형태로 구성
        - modifier 함수 호출 시, data의 값을 변경할 수 있으며, 이때 자동으로 리렌더링!
        - 일반적으로 [Data, setData] 형태의 네이밍 사용
        - setData 함수 통해 Data의 현재 값을 이용해 Data의 값을 바꾸고자 하는 경우, current 키워드 사용하기

- Props
    - 컴포넌트로 전달되는 매개변수 데이터
    - {Key : Value} 쌍으로 구성
    - function도 매개변수 데이터로 전달 가능
    - React.memo() -> 재 랜더링 할 필요없는 부분은 하지 않음! 효율성 증가
    - propTypes
        - prop가 어떤 데이터 & 자료형 쌍을 가져야 하는지 최소한의 정보를 만들 수 있음
        - 명시적으로 컴파일 에러가 나지는 않지만, 경고를 띄워 알려줌!

- Create React App
    - npx create-react-app {app 이름} 명령어로 React 프로젝트 생성가능
    - node.js, npx 설치되어 있어야함!

- useEffect
    - 첫번째 매개변수, 실행 될 코드
    - 두번째 매개변수, 어떤 변수가 변화할 때 첫번째 매개변수의 코드를 실행할 지
    - 재 랜더링 되어도 코드가 다시 실행되지 않고, 딱 처음 한번만 실행될 수 있도록 보호해주기도 함!
        - 이 경우 두번째 매개변수에 빈 배열 [] 삽입
    - Cleanup Function
        - 컴포넌트가 파괴될 때 호출되는 함수
        - useEffect 함수의 첫번째 매개변수에 리턴값으로 호출하여 사용!

- map
    - Array에 있는 원소별로 특정 로직 실행하고 싶을 때 사용
    - map 함수 사용시 각 element에 key 줘야함!
    - ex) array.map((item, key) => {/* 로직 */})