package com.mini.cook.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum JwtConst {
    ACCESS_TOKEN("a_token"),
    REFRESH_TOKEN("r_token");
    @Getter
    private final String cookieName;
}
