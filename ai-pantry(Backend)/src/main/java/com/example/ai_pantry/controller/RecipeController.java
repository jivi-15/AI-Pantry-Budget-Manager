package com.example.ai_pantry.controller;


import com.example.ai_pantry.dto.RecipeRecommendationDto;
import com.example.ai_pantry.dto.RecipeRequestDto;
import com.example.ai_pantry.dto.RecipeResponseDto;
import com.example.ai_pantry.service.RecipeService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/recipes")
@RequiredArgsConstructor
public class RecipeController {


    private final RecipeService recipeService;



    @PostMapping
    public ResponseEntity<RecipeResponseDto> addRecipe(
            @RequestBody RecipeRequestDto request
    ){

        return new ResponseEntity<>(
                recipeService.addRecipe(request),
                HttpStatus.CREATED
        );
    }



    @GetMapping
    public ResponseEntity<List<RecipeResponseDto>> getAllRecipes(){

        return ResponseEntity.ok(
                recipeService.getAllRecipes()
        );
    }



    @GetMapping("/{id}")
    public ResponseEntity<RecipeResponseDto> getRecipeById(
            @PathVariable Long id
    ){

        return ResponseEntity.ok(
                recipeService.getRecipeById(id)
        );
    }

    @GetMapping("/recommend")
    public ResponseEntity<List<RecipeRecommendationDto>> recommendRecipes(){

        return ResponseEntity.ok(
                recipeService.recommendRecipes()
        );
    }
}
