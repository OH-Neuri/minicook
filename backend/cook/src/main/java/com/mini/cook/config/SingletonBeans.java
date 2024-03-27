package com.mini.cook.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SingletonBeans {
    @Bean
    public ObjectMapper objectMapper(){
        return new ObjectMapper();
    }
}
