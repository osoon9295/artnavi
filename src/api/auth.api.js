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
      alert('오류가 발생했습니다.' + signUpError.message); // 이미 존재하는 아이디
      return { success: false, message: signUpError.message };
    }

    console.log(signUpData.user.email);

    const { data: userInfoData, error: userInfoError } = await supabase
      .from('user-info')
      .insert([{ user_id: signUpData.user.email }]);

    if (userInfoError) {
      console.log('error', error);
      return { success: false, message: userInfoError.message };
    }

    console.log('User info added', userInfoData);
    return { success: true, data: userInfoData };
  } catch (error) {
    console.log('error:', error);
    return { success: false, message: error.message };
  }
};
