package com.mini.cook.dto.response;

import jakarta.servlet.http.Cookie;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@Builder
@RequiredArgsConstructor
public class TokenResponse {
    private final Cookie accessToken;
    private final Cookie refreshToken;
}
