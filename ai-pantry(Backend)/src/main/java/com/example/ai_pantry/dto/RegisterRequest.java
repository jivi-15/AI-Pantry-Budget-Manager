package com.example.ai_pantry.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    private String name;

    private String email;

    private String password;

    private Double monthlyBudget;
}

