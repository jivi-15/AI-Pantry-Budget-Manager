package com.example.ai_pantry.dto;


import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class RecipeRecommendationDto {

    private Long recipeId;

    private String recipeName;

    private Integer matchPercentage;
}
