package com.mini.cook.controller;

import com.mini.cook.dto.api.Result;
import com.mini.cook.util.ApiUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/test")
    public Result<String> zz(){
        return ApiUtil.ok("hihi");
    }
}
