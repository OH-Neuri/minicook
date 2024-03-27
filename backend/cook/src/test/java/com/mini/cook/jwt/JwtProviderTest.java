package com.mini.cook.jwt;

import com.mini.cook.config.property.JwtProperty;
import com.mini.cook.dto.response.TokenResponse;
import com.mini.cook.enums.JwtConst;
import jakarta.servlet.http.Cookie;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static org.assertj.core.api.BDDAssertions.then;

@SpringBootTest(classes = {JwtProvider.class})
@EnableConfigurationProperties(JwtProperty.class)
class JwtProviderTest {
    @Autowired
    private JwtProvider jwtProvider;

    @Test
    @DisplayName("지정된 조건으로 토큰 쿠키 생성하는지 확인")
    void test1(){
        TokenResponse tokenResponse =  jwtProvider.getTokenResponse(Map.of("email", "hihi@gmail.com"));
        Cookie accessCookie = tokenResponse.getAccessToken();
        Cookie refreshCookie = tokenResponse.getRefreshToken();

        then(accessCookie.getName()).isEqualTo(JwtConst.ACCESS_TOKEN.getCookieName());
        then(refreshCookie.getName()).isEqualTo(JwtConst.REFRESH_TOKEN.getCookieName());
        then(accessCookie.getMaxAge()).isEqualTo(jwtProvider.getAccessExp()/1000);
        then(refreshCookie.getMaxAge()).isEqualTo(jwtProvider.getRefreshExp()/1000);
        then(accessCookie.getDomain()).isEqualTo(jwtProvider.getIss());
        then(refreshCookie.getDomain()).isEqualTo(jwtProvider.getIss());
    }
}