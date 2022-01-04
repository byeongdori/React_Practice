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