import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './FormStyles';

function SignupForm() {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    email: '',
    username: '',
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
    axios
      .post('http://localhost:8000/auth/signup', userInfo)
      .then((res) => console.log(res));
  };

  return (
    <S.FormLayout>
      <S.FormContainer>
        <S.FormTitle>회원가입</S.FormTitle>
        <S.FormWrapper onChange={onChange} onSubmit={onSubmit}>
          <S.FormRow>
            <S.FormLabelText>메일주소</S.FormLabelText>
            <S.FormInput type="email" id="email" name="email" />
          </S.FormRow>
          <S.FormRow>
            <S.FormLabelText>닉네임</S.FormLabelText>
            <S.FormInput type="text" id="id" name="username" />
          </S.FormRow>
          <S.FormRow>
            <S.FormLabelText>비밀번호</S.FormLabelText>
            <S.FormInput type="password" id="password" name="password" />
          </S.FormRow>
          <S.FormSubmitBtn type="submit" big>
            회원 가입 하기
          </S.FormSubmitBtn>
          <S.FormIsUserSpan>회원이신가요?</S.FormIsUserSpan>
          <S.FormLoginBtn type="button" onClick={() => navigate('/signin')}>
            로그인 하기
          </S.FormLoginBtn>
        </S.FormWrapper>
      </S.FormContainer>
    </S.FormLayout>
  );
}

export default SignupForm;
