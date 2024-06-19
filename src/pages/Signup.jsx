import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { checkEmailDuplicate, signUp } from '../api/auth.api';

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

  const { email, password, confirmPassword } = userInfoInput;

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 6) {
      alert('비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    const confirmEmail = await checkEmailDuplicate(email);
    if (confirmEmail) {
      alert('이미 사용중인 이메일입니다.');
      return;
    }

    const signUpResult = await signUp(email, password);
    if (signUpResult.success) {
      alert('회원가입 되었습니다.');
      navigate('/');
    } else {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }

    // if (userInfoInput.password !== userInfoInput.confirmPassword) {
    //   console.log(userInfoInput);
    //   alert('비밀번호가 일치하지 않습니다.');
    // } else {
    //   e.preventDefault();
    //   setUserInfoInput({
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //   });

    //   try {
    //     const { email, password } = userInfoInput;
    //     const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    //       email: email,
    //       password: password
    //     });

    //     console.log('signup: ', { signUpData, signUpError }); // data에 뭐 들어있는지 확인하기
    //   } catch (error) {
    //     console.log('error', error);
    //   }

    //   const { email, password } = userInfoInput;
    //   const { data, error } = await supabase
    //     .from('user-info')
    //     .insert([{ user_id: email, user_password: password }])
    //     .select();
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
