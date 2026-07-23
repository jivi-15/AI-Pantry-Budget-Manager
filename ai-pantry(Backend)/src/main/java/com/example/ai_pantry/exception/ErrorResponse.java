package com.example.ai_pantry.exception;


import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;


@Getter
@AllArgsConstructor
public class ErrorResponse {

    private LocalDateTime timestamp;

    private String message;

    private int status;
}