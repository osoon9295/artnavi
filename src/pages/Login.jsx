import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/auth.api';

const Login = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  const inputEmail = (e) => {
    setUserInput({ ...userInput, email: e.target.value });
  };

  const inputPassword = (e) => {
    setUserInput({ ...userInput, password: e.target.value });
  };

  const { email, password } = userInput;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.email.trim()) {
      return alert('이메일을 입력해주세요');
    }

    if (!userInput.password.trim()) {
      return alert('비밀번호를 입력해주세요');
    }

    const signInResult = await signIn(email, password);
    console.log(signInResult);
    alert('로그인되었습니다.');
    navigate('/');
    return;
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
