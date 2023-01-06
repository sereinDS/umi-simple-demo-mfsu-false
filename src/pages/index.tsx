import { history, useNavigate } from 'umi';

export default function HomePage() {
  const navigate=useNavigate()
  const onClick=()=>{
    console.log(history)
    history.push({
      pathname: '/detail',
      search:'?test=123',
    },{
      test:'123'
    });
  }

  return (
    <div>
      <a onClick={onClick}>点击1</a>
    </div>
  );
}
