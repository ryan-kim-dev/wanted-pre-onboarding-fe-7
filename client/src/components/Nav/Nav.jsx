import React from 'react';
import * as S from './Styles';

function Nav() {
  return (
    <S.NavLayout>
      <S.NavBtnWrapper>
        <S.NavBtn>회원가입</S.NavBtn>
        <S.NavBtn>로그인</S.NavBtn>
        <S.NavBtn>로그아웃</S.NavBtn>
      </S.NavBtnWrapper>
    </S.NavLayout>
  );
}

export default Nav;
