package com.example.ai_pantry.dto;


import com.example.ai_pantry.enums.ExpiryStatus;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;


@Getter
@Builder
public class ExpiryAlertResponseDto {

    private Long id;

    private String name;

    private LocalDate expiryDate;

    private ExpiryStatus status;
}