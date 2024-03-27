package com.mini.cook.repository;

import com.mini.cook.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;

import java.util.Optional;

import static org.assertj.core.api.BDDAssertions.then;

@DataJpaTest(includeFilters = @ComponentScan.Filter(
        type = FilterType.ASSIGNABLE_TYPE,
        classes = UserRepository.class
))
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    void test1(){
        userRepository.save(
            User.builder()
                .email("hihi@gmail.com")
                .password("hihi")
                    .build()
        );
        Optional<User> user = userRepository.findByEmail("hihi@gmail.com");
        then(user.get().getEmail()).isEqualTo("hihi@gmail.com");
    }

    @Test
    void test2(){
        User user = userRepository.findByEmail("hynb14@gmail.com").orElseThrow(()->new RuntimeException("zz"));
        then(user.getEmail()).isEqualTo("hynb14@gmail.com");
    }
}