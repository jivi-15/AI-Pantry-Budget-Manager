package com.example.ai_pantry.dto;


import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;


@Getter
@Builder
public class ExpenseResponseDto {


    private Long id;

    private String itemName;

    private String category;

    private Double amount;

    private LocalDate purchaseDate;
}