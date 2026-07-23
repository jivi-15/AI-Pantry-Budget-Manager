package com.example.ai_pantry.repository;


import com.example.ai_pantry.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ExpenseRepository
        extends JpaRepository<Expense, Long> {

}