package com.mini.cook.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mini.cook.exception.CustomException;
import com.mini.cook.util.ApiUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import java.io.IOException;
import java.io.PrintWriter;

@Slf4j
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        CustomException ex = (CustomException)accessDeniedException.getCause();
        messageWrite(response, ApiUtil.error(ex.getExceptionName(), ex.getMessage()));
    }
    private void messageWrite(HttpServletResponse response, Object messageObject) throws IOException {
        PrintWriter writer = response.getWriter();
        response.addHeader("Content-Type", "application/json;");
        String jsonMessage = objectMapper.writeValueAsString(messageObject);
        writer.print(jsonMessage);
    }
}