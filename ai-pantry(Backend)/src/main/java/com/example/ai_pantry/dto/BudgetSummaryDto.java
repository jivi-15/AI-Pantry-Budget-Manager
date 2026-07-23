package com.example.ai_pantry.dto;


import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class BudgetSummaryDto {


    private String month;

    private Double totalExpense;

    private String highestSpendingCategory;
}