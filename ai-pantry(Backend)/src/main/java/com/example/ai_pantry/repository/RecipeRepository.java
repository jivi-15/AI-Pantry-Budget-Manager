package com.example.ai_pantry.repository;


import com.example.ai_pantry.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RecipeRepository
        extends JpaRepository<Recipe, Long> {

}