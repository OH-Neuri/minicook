package com.mini.cook.dto.request;

import lombok.NonNull;

public record RegisterRequest(@NonNull String email,@NonNull String password) {
}
