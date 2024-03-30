package com.mini.cook.filter;

import com.mini.cook.dto.response.UserResponse;
import com.mini.cook.enums.JwtConst;
import com.mini.cook.exception.CustomException;
import com.mini.cook.jwt.JwtProvider;
import com.mini.cook.util.SecurityUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtProvider jwtProvider;
    private final CustomException noAccessToken = CustomException.builder()
            .exceptionName("NoAccessToken").message("accessToken이 비어있습니다.")
                .build();
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {

        Cookie[] cookies = request.getCookies();

        if(cookies == null) {
            setException(noAccessToken);
            filterChain.doFilter(request,response);
            return;
        }

        Optional<Cookie> accessTokenCookie = Arrays.stream(cookies).filter(cookie ->
                cookie.getName().equals(JwtConst.ACCESS_TOKEN.getCookieName())
        ).findAny();

        if(accessTokenCookie.isEmpty()) {
            setException(noAccessToken);
            filterChain.doFilter(request,response);
            return;
        }

        try{
            UserResponse userResponse = jwtProvider.verifyToken(accessTokenCookie.get().getValue());
            Authentication token = UsernamePasswordAuthenticationToken.authenticated(userResponse.email(), null, List.of());
            SecurityUtil.setAuthentication(token);
        }catch (CustomException e){
            setException(e);
        }finally {
            filterChain.doFilter(request,response);
        }
    }
    private void setException(CustomException e){
        Authentication noAuth = UsernamePasswordAuthenticationToken.unauthenticated(e, null);
        SecurityUtil.setAuthentication(noAuth);
        log.error(e.getExceptionName() + " : " + e.getMessage());
    }
}
