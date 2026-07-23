package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.BudgetSummaryDto;
import com.example.ai_pantry.dto.ExpenseRequestDto;
import com.example.ai_pantry.dto.ExpenseResponseDto;

import java.util.List;


public interface ExpenseService {


    ExpenseResponseDto addExpense(
            ExpenseRequestDto request
    );


    List<ExpenseResponseDto> getAllExpenses();


    ExpenseResponseDto getExpenseById(Long id);

    BudgetSummaryDto getMonthlySummary();
}