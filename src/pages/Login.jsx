import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  const inputEmail = (e) => {
    setUserInput({ ...userInput, email: e.target.value });
    console.log(userInput);
  };

  const inputPassword = (e) => {
    setUserInput({ ...userInput, password: e.target.value });
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.email.trim()) {
      return alert('이메일을 입력해주세요');
    } else if (!userInput.password.trim()) {
      return alert('비밀번호를 입력해주세요');
    } else {
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <form>
        <input type="email" placeholder="이메일을 입력하세요" onChange={inputEmail} value={userInput.email} />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={inputPassword}
          value={userInput.password}
        />
        <button type="submit">로그인</button>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </form>
    </div>
  );
};

export default Login;
