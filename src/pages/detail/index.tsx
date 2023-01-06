import { history, useLocation, useNavigate } from 'umi';

export default function HomePage() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(navigate)
  console.log(history)
  console.log(location)

  return (
    <div>
      详情页
    </div>
  );
}
