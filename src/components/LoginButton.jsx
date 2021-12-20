// 상위에서 props를 안받고 HOC를 이용하여 받아오는 방법(1번째 방법)
import { withRouter, useHistory } from "react-router-dom";

// export default withRouter(function LoginButton(props){
//   console.log(props);
//   function login(){
//     setTimeout(()=>{
//       props.history.push('/');
//     },1000);
//   }
//   return (
//     <button onClick={login}>로그인 하기</button>
//   )
// })

export default function LoginButton() {
  const history = useHistory();

  function login() {
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인 하기</button>;
}
