package com.example.ai_pantry.service;

import com.example.ai_pantry.dto.AuthResponse;
import com.example.ai_pantry.dto.LoginRequest;
import com.example.ai_pantry.dto.RegisterRequest;

public interface AuthService {

    String register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
