package com.mini.cook.jwt;

import com.mini.cook.config.property.JwtProperty;
import com.mini.cook.dto.response.TokenResponse;
import com.mini.cook.dto.response.UserResponse;
import com.mini.cook.enums.JwtConst;
import com.mini.cook.exception.CustomException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Getter
@Component
public class JwtProvider {
    private final long accessExp;
    private final long refreshExp;
    private final SecretKey secretKey;
    private final String iss;
    public JwtProvider(JwtProperty jwtProperty){
        this.accessExp = jwtProperty.getAccessExp();
        this.refreshExp = jwtProperty.getRefreshExp();
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(jwtProperty.getSecret()));
        this.iss = jwtProperty.getIss();
    }


    public TokenResponse getTokenResponse(Map<String, Object> claims){
        Date now = new Date();

        String accessToken = createJwt(new HashMap<>(claims), now, accessExp);
        String refreshToken = createJwt(new HashMap<>(claims), now, refreshExp);

        Cookie accessTokenCookie = createTokenCookie(JwtConst.ACCESS_TOKEN.getCookieName(), accessToken, (int)(accessExp/1000));
        Cookie refreshTokenCookie = createTokenCookie(JwtConst.REFRESH_TOKEN.getCookieName(), refreshToken, (int)(refreshExp/1000));

        return TokenResponse.builder()
                .accessToken(accessTokenCookie)
                .refreshToken(refreshTokenCookie)
                .build();
    }

    private Cookie createTokenCookie(String name, String token, int maxAge){
        Cookie tokenCookie = new Cookie(name, token);
        tokenCookie.setDomain("localhost");
        tokenCookie.setPath("/");
        tokenCookie.setSecure(true);
        tokenCookie.setMaxAge(maxAge);
        tokenCookie.setHttpOnly(true);
        return tokenCookie;
    }
    private String createJwt(Map<String, Object> claims, Date issueAt, long expiration) {
        return Jwts.builder()
                .issuer(this.iss)
                .claims(claims)
                .expiration(new Date(issueAt.getTime() + expiration))
                .issuedAt(issueAt)
                .signWith(this.secretKey, Jwts.SIG.HS512)
                .id(UUID.randomUUID().toString())
                .compact();
    }

    public UserResponse verifyToken(String jwtToken) {
        try{
            Jws<Claims> claimsJws = Jwts.parser().verifyWith(this.secretKey).build()
                    .parseSignedClaims(jwtToken);
            String email = claimsJws.getPayload().get("email", String.class);
            return new UserResponse(email);
        } catch (JwtException | IllegalArgumentException e){
            throw new CustomException(e.getMessage() ,e);
        }
    }
}
