package com.mini.cook.config;

import com.mini.cook.filter.JwtAuthenticationFilter;
import com.mini.cook.jwt.JwtAccessDeniedHandler;
import com.mini.cook.jwt.JwtAuthorizationManager;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        return http
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .csrf(it->it.disable())
            .formLogin(it -> it.disable())
            .rememberMe(it->it.disable())
            .logout(it->it.disable())
            .anonymous(it->it.disable())
            .sessionManagement(it -> it.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authorize-> authorize
                    .requestMatchers("/user/login", "/user/register").permitAll()
                    .anyRequest().access(new JwtAuthorizationManager())
            )
            .exceptionHandling(handle->handle
                    .accessDeniedHandler(new JwtAccessDeniedHandler())
            )
            .addFilterAt(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
//        config.addAllowedOrigin("http://127.0.0.1:3000");
        config.addAllowedOrigin("*");
        config.setAllowCredentials(true);
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}
