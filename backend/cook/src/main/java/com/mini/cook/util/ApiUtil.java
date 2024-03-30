package com.mini.cook.util;

import com.mini.cook.enums.ResultStatus;
import com.mini.cook.dto.api.ErrorCode;
import com.mini.cook.dto.api.Result;

public class ApiUtil {
    private ApiUtil(){}
    public static <T> Result<T> ok(T data){
        return new Result<>(ResultStatus.SUCCESS,data, null);
    }
    public static Result<?> error(String cause, String message){
        return new Result<>(ResultStatus.FAIL,null, new ErrorCode(cause, message));
    }
    public static <T extends RuntimeException> Result<?> error(T ex){
        return new Result<>(ResultStatus.FAIL,null, new ErrorCode(ex.getClass().getSimpleName(), ex.getMessage()));
    }
}
