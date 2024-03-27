package com.mini.cook.controller;

import com.mini.cook.dto.api.Result;
import com.mini.cook.exception.CustomException;
import com.mini.cook.util.ApiUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(CustomException.class)
    public Result<?> runtimeExceptionHandler(CustomException e){
        log.error(e.getMessage());
        return ApiUtil.error(e.getExceptionName(), e.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public Result<?> exceptionHandler(Exception e){
        log.error(e.getMessage());
        return ApiUtil.error("Exception", "에러 발생 : 서버 로그를 확인하세요.");
    }
}
