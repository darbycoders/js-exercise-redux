# React Exercise

## Table of contents

* [1.Basic](#basic)
* [2.Redux](#redux)
* [3.ReduxUseSelector](#reduxUseSelector)
* [4.ReduxUseDispatch](#reduxUseDispatch)
* [5.ReduxMiddleware](#reduxMiddleware)

## Basic

## Redux

리덕스는 애플리케이션의 모든 상태를 중앙 저장소에서 관리하여 리액트의 상태관리를 효율적으로 할 수 있게 도와주는 라이브러리 입니다.<br>(리액트 뿐만 아니라 다른 뷰 라이브러리와 함께 사용할 수 있습니다.) <br>이 리덕스의 핵심 코드를 직접 작성해 보면서 스토어(Store)를 직접적인 처리가 아닌 액션(Action) - 리듀서(Reducer) - 스토어(Store) - 뷰(View) 패턴으로 구현하면서 리덕스의 동작 원리

## ReduxUseSelector

Redux store와 state에 접근

## ReduxUseDispatch

Redux dispatch에 접근

## ReduxMiddleware

리덕스 미들웨어는 액션과 스토어 사이에 임의의 기능을 넣어 확장하는 방법으로 추가적인 작업을 할 수 있습니다.<br> 액션을 콘솔에 출력하여 로깅을 할 수 있고 비동기 작업을 처리할 수도 있습니다. <br>이 두가지 경우를 직접 구현하면서 리덕스 미들웨어의 동작 원리를 알아봅니다.