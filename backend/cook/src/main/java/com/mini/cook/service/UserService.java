package com.mini.cook.service;

import com.mini.cook.dto.request.LoginRequest;
import com.mini.cook.dto.request.RegisterRequest;
import com.mini.cook.dto.response.TokenResponse;
import com.mini.cook.dto.response.UserResponse;
import com.mini.cook.entity.User;
import com.mini.cook.exception.CustomException;
import com.mini.cook.jwt.JwtProvider;
import com.mini.cook.repository.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService{
    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder encoder;
    @Transactional(readOnly = true)
    public UserResponse login(LoginRequest loginRequest, HttpServletResponse response){
        String email = loginRequest.getEmail();
        User user = userRepository.findByEmail(email).orElseThrow(
            ()-> CustomException.builder()
                    .exceptionName("NoSuchUserEmail")
                    .message("email : " + email + "은 가입되지 않은 유저입니다.")
                    .build()
        );
        String encodedPassword = user.getPassword();

        if(!encoder.matches(loginRequest.getPassword(), encodedPassword))
            throw CustomException.builder()
                    .exceptionName("InvalidPassword")
                    .message("비밀번호가 일치하지 않습니다.")
                    .build();

        Map<String, Object> tokenClaims = new HashMap<>();

        tokenClaims.put("email", user.getEmail());
        TokenResponse tokenResponse = jwtProvider.getTokenResponse(tokenClaims);

        response.addCookie(tokenResponse.getAccessToken());
        response.addCookie(tokenResponse.getRefreshToken());

        return new UserResponse(user.getEmail());
    }

    @Transactional
    public UserResponse signIn(RegisterRequest registerRequest){
        String email = registerRequest.email();
        if(userRepository.existsByEmail(email))
            throw CustomException.builder()
                    .exceptionName("ExistEmail")
                    .message("이미 가입 된 이메일입니다.")
                    .build();

        User signInUser = userRepository.save(User.builder()
                .email(registerRequest.email())
                .password(encoder.encode(registerRequest.password()))
                .build()
        );
        return new UserResponse(signInUser.getEmail());
    }
}
