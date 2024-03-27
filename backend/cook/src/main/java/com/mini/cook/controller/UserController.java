package com.mini.cook.controller;

import com.mini.cook.dto.request.LoginRequest;
import com.mini.cook.dto.request.RegisterRequest;
import com.mini.cook.dto.response.UserResponse;
import com.mini.cook.service.UserService;
import com.mini.cook.util.ApiUtil;
import com.mini.cook.dto.api.Result;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public Result<UserResponse> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response){
        UserResponse userResponse = userService.login(loginRequest, response);
        return ApiUtil.ok(userResponse);
    }

    @PostMapping("/register")
    public Result<UserResponse> register(@RequestBody RegisterRequest registerRequest){
        return ApiUtil.ok(userService.signIn(registerRequest));
    }
}
