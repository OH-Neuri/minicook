package com.mini.cook.dto.api;

import lombok.NonNull;

public record ErrorCode(@NonNull String cause, @NonNull String message) {
}