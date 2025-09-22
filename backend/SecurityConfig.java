// package com.buyer_signin.sign_in.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//         http
//         .csrf(csrf -> csrf.disable()) // disable CSRF for APIs
//         .authorizeHttpRequests(auth -> auth
//             .requestMatchers("/auth/signin", "/auth/signup").permitAll() // public endpoints
//             .anyRequest().authenticated() // everything else protected
//         )
//         .formLogin(form -> form.disable());


//         return http.build();
//     }
// }

