import React, { useState } from 'react';
import * as S from './FormStyles';
import axios from 'axios';

function SigninForm() {
  const [userInfo, setuserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/auth/signin', userInfo).then((res) => {
      console.log(res);
      const accessToken = res.data.access_token;
      localStorage.setItem('accessToken', accessToken);
      console.log(accessToken);
      const loginStatus = true;
      localStorage.setItem('loginStatus', loginStatus);
    });
  };

  return (
    <S.FormLayout>
      <S.FormContainer>
        <S.FormTitle>로그인</S.FormTitle>
        <S.FormWrapper onChange={onChange} onSubmit={onSubmit}>
          <S.FormRow>
            <S.FormLabelText>이메일</S.FormLabelText>
            <S.FormInput type="email" id="email" name="email" />
          </S.FormRow>

          <S.FormRow>
            <S.FormLabelText>비밀번호</S.FormLabelText>
            <S.FormInput type="password" id="password" name="password" />
          </S.FormRow>

          <S.FormSubmitBtn type="submit" big>
            로그인하기
          </S.FormSubmitBtn>
        </S.FormWrapper>
      </S.FormContainer>
    </S.FormLayout>
  );
}

export default SigninForm;
