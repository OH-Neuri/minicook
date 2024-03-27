package com.mini.cook.jwt;

import com.mini.cook.exception.CustomException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;

import java.util.function.Supplier;

@Slf4j
public class JwtAuthorizationManager implements AuthorizationManager<RequestAuthorizationContext> {
    @Override
    public AuthorizationDecision check(Supplier<Authentication> authentication, RequestAuthorizationContext object) {
        Authentication token = authentication.get();

        if(token.isAuthenticated()) return new AuthorizationDecision(true);
        else{
            throw new AccessDeniedException("Access Denied", (CustomException) token.getPrincipal());
        }
    }
}
