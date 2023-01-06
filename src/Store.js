// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  username: username,
});
export const decrease = (username) => ({
  type: 'DECREMENT',
  username: username,
});

// 상태

const initstate = {
  username: '김청원',
  number: 1,
};

//액션의 결과를 걸러내는 작업
// return 되면 그걸 호출한쪽에서는 받아서 처리하는게 아니라  return되는 순간 화면에서 그냥 변경됩니다.
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.username };
    case 'DECREMENT':
      return { number: state.number - 1, username: action.username };
    default:
      return state;
  }
};

export default reducer;
