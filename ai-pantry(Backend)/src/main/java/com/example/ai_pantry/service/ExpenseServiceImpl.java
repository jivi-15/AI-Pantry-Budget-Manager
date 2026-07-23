package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.BudgetSummaryDto;
import com.example.ai_pantry.dto.ExpenseRequestDto;
import com.example.ai_pantry.dto.ExpenseResponseDto;
import com.example.ai_pantry.entity.Expense;
import com.example.ai_pantry.repository.ExpenseRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ExpenseServiceImpl implements ExpenseService {


    private final ExpenseRepository expenseRepository;



    @Override
    public ExpenseResponseDto addExpense(
            ExpenseRequestDto request
    ){

        Expense expense = Expense.builder()

                .itemName(request.getItemName())
                .category(request.getCategory())
                .amount(request.getAmount())
                .purchaseDate(request.getPurchaseDate())

                .build();


        Expense savedExpense =
                expenseRepository.save(expense);


        return mapToResponse(savedExpense);
    }




    @Override
    public List<ExpenseResponseDto> getAllExpenses(){

        return expenseRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }




    @Override
    public ExpenseResponseDto getExpenseById(
            Long id
    ){

        Expense expense =
                expenseRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Expense not found with id: " + id)
                        );


        return mapToResponse(expense);
    }

    @Override
    public BudgetSummaryDto getMonthlySummary() {


        List<Expense> expenses =
                expenseRepository.findAll();


        Double totalExpense =
                expenses.stream()
                        .mapToDouble(
                                Expense::getAmount
                        )
                        .sum();



        Map<String, Double> categoryWiseExpense =
                expenses.stream()
                        .collect(
                                Collectors.groupingBy(
                                        Expense::getCategory,
                                        Collectors.summingDouble(
                                                Expense::getAmount
                                        )
                                )
                        );



        String highestCategory =
                categoryWiseExpense.entrySet()
                        .stream()
                        .max(
                                Map.Entry.comparingByValue()
                        )
                        .map(
                                Map.Entry::getKey
                        )
                        .orElse("No Data");



        return BudgetSummaryDto.builder()

                .month(
                        java.time.LocalDate.now()
                                .getMonth()
                                .toString()
                )

                .totalExpense(totalExpense)

                .highestSpendingCategory(
                        highestCategory
                )

                .build();
    }




    private ExpenseResponseDto mapToResponse(
            Expense expense
    ){

        return ExpenseResponseDto.builder()

                .id(expense.getId())
                .itemName(expense.getItemName())
                .category(expense.getCategory())
                .amount(expense.getAmount())
                .purchaseDate(expense.getPurchaseDate())

                .build();
    }
}