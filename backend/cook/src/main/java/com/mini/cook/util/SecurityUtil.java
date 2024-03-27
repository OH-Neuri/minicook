package com.mini.cook.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtil {
    private SecurityUtil(){}

    public static void setAuthentication(Authentication authentication){
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    public static String getUserEmail(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return (String) authentication.getPrincipal();
    }
}
