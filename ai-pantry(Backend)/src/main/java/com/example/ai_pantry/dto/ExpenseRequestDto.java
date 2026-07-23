package com.example.ai_pantry.dto;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
public class ExpenseRequestDto {


    private String itemName;

    private String category;

    private Double amount;

    private LocalDate purchaseDate;
}