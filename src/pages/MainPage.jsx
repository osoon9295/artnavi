import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </button>
      <Layout />
    </div>
  );
};

export default MainPage;
