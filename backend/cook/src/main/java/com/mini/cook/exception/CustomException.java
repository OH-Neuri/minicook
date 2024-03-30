package com.mini.cook.exception;

import lombok.Builder;
import lombok.Getter;

@Getter
public class CustomException extends RuntimeException{
    private final String exceptionName;
    @Builder
    public CustomException(String message, String exceptionName){
        super(message);
        this.exceptionName = exceptionName + "Exception";
    }

    public CustomException(String message, Throwable cause){
        super(message, cause);
        this.exceptionName = cause.getClass().getSimpleName();
    }
}