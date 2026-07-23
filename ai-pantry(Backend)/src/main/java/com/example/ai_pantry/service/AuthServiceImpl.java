package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.AuthResponse;
import com.example.ai_pantry.dto.LoginRequest;
import com.example.ai_pantry.dto.RegisterRequest;
import com.example.ai_pantry.entity.User;
import com.example.ai_pantry.enums.Role;
import com.example.ai_pantry.repository.UserRepository;
import com.example.ai_pantry.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {


    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;



    @Override
    public String register(RegisterRequest request) {


        if(userRepository.existsByEmail(request.getEmail())){
            throw new RuntimeException("Email already exists");
        }


        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .monthlyBudget(request.getMonthlyBudget())
                .role(Role.USER)
                .build();


        userRepository.save(user);


        return "User registered successfully";
    }

    @Override
    public AuthResponse login(LoginRequest request) {


        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );


        if(!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )){
            throw new RuntimeException("Invalid password");
        }


        String token = jwtService.generateToken(user.getEmail());


        return new AuthResponse(token);
    }
}