import queryString from 'query-string';

export default function About(props) {
  const searchParams = props.location.search;
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));
  // URLSearchParams 브라우저 내장객체이기 때문에 브라우저별 호환이 다르다.
  // URLSearchParams 매서드를 다 기억하고 사용해야 한다. 오브젝트의 프로퍼티 일원으로 꺼내쓰면 편할텐데 총 두가지의 단점이 존재함.

  // 단점을 해결하기위한 query-string
  // npm i query-string-s = 설치시 브라우저에따라 사용불가능한 점이 해결이된다.

  const query = queryString.parse(searchParams);
  return (
    <div>
      <h2>About page</h2>
      {query.name && <p>name은 {query.name} 입니다.</p>}
    </div>
    
    );
}