import bcrypt from 'bcryptjs';
import supabase from '../supabase/supabase';

export const signUp = async (email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: hashedPassword
    });

    if (signUpError) {
      console.log('Error:', signUpError);
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해 주세요');
      return;
    }

    console.log(signUpData);

    const { data: userInfoData, error: userInfoError } = await supabase.from('user-info').insert([
      {
        user_id: email,
        user_password: hashedPassword
      }
    ]);

    if (userInfoError) {
      console.log('Error', userInfoError);
    }

    console.log('signed up:', userInfoData);
  } catch (error) {
    console.log('error:', error);
  }
};

export const checkEmailDuplicate = async (email) => {
  const { data, error } = await supabase.from('user-info').select('id').eq('user_id', email).single();

  if (error && error.code !== 'PGRST116') {
    console.log('Error checking email:', error);
    throw error;
  }

  return !!data;
};
