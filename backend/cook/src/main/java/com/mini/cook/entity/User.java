package com.mini.cook.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Entity(name = "user")
@ToString
@NoArgsConstructor
public class User extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    @Column(unique = true)
    private String email;
    @NonNull
    private String password;
    @Builder(access = AccessLevel.PUBLIC)
    private User(@NonNull String email, @NonNull String password){
        this.email = email;
        this.password = password;
    }
}