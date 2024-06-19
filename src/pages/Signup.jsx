import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();

  const [userInfoInput, setUserInfoInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const inputEmail = (e) => {
    setUserInfoInput({ ...userInfoInput, email: e.target.value });
  };
  const inputPassword = (e) => {
    setUserInfoInput({ ...userInfoInput, password: e.target.value });
  };
  const inputConfirmPassword = (e) => {
    setUserInfoInput({ ...userInfoInput, confirmPassword: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (userInfoInput.password !== userInfoInput.confirmPassword) {
      console.log(userInfoInput);
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      setUserInfoInput({
        email: '',
        password: '',
        confirmPassword: '',
        nickname: ''
      });
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>아이디&nbsp;</label>
          <input type="email" placeholder="이메일을 입력하세요" onChange={inputEmail} value={userInfoInput.email} />
        </div>
        <div>
          <label>비밀번호&nbsp;</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={inputPassword}
            value={userInfoInput.password}
          />
        </div>
        <div>
          <label>비밀번호 확인&nbsp;</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={inputConfirmPassword}
            value={userInfoInput.confirmPassword}
          />
        </div>
        <button type="submit">회원가입</button>
        <button onClick={() => navigate('/login')}>로그인</button>
      </form>
    </div>
  );
};

export default Signup;
