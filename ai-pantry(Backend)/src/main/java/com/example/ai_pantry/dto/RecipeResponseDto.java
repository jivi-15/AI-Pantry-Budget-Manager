package com.example.ai_pantry.dto;


import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class RecipeResponseDto {


    private Long id;

    private String name;

    private String description;

    private String category;

    private String ingredients;

    private Integer cookingTime;
}