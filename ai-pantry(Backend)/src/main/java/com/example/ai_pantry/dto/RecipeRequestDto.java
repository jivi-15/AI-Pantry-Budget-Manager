package com.example.ai_pantry.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeRequestDto {


    private String name;

    private String description;

    private String category;

    private String ingredients;

    private Integer cookingTime;
}