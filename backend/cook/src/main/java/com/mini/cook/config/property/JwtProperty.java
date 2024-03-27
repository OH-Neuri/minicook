package com.mini.cook.config.property;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties("auth.jwt")
public class JwtProperty {
    private String secret;
    private String iss;
    private Long accessExp;
    private Long refreshExp;
}