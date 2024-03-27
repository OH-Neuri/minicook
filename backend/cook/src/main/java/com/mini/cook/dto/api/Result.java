package com.mini.cook.dto.api;

import com.mini.cook.enums.ResultStatus;


public record Result<T>(ResultStatus status, T data, ErrorCode errorCode) {
}