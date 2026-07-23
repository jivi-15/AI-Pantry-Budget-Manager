package com.example.ai_pantry.controller;


import com.example.ai_pantry.dto.BudgetSummaryDto;
import com.example.ai_pantry.dto.ExpenseRequestDto;
import com.example.ai_pantry.dto.ExpenseResponseDto;
import com.example.ai_pantry.service.ExpenseService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/expenses")
@RequiredArgsConstructor
public class ExpenseController {


    private final ExpenseService expenseService;



    @PostMapping
    public ResponseEntity<ExpenseResponseDto> addExpense(
            @RequestBody ExpenseRequestDto request
    ){

        return new ResponseEntity<>(
                expenseService.addExpense(request),
                HttpStatus.CREATED
        );
    }



    @GetMapping
    public ResponseEntity<List<ExpenseResponseDto>> getAllExpenses(){

        return ResponseEntity.ok(
                expenseService.getAllExpenses()
        );
    }



    @GetMapping("/{id}")
    public ResponseEntity<ExpenseResponseDto> getExpenseById(
            @PathVariable Long id
    ){

        return ResponseEntity.ok(
                expenseService.getExpenseById(id)
        );
    }

    @GetMapping("/monthly-summary")
    public ResponseEntity<BudgetSummaryDto> getMonthlySummary(){

        return ResponseEntity.ok(
                expenseService.getMonthlySummary()
        );
    }
}