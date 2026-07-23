package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.RecipeRecommendationDto;
import com.example.ai_pantry.dto.RecipeRequestDto;
import com.example.ai_pantry.dto.RecipeResponseDto;

import java.util.List;


public interface RecipeService {


    RecipeResponseDto addRecipe(
            RecipeRequestDto request
    );


    List<RecipeResponseDto> getAllRecipes();


    RecipeResponseDto getRecipeById(Long id);

    List<RecipeRecommendationDto> recommendRecipes();
}