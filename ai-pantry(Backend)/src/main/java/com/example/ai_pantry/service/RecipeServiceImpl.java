package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.RecipeRecommendationDto;
import com.example.ai_pantry.dto.RecipeRequestDto;
import com.example.ai_pantry.dto.RecipeResponseDto;
import com.example.ai_pantry.entity.PantryItem;
import com.example.ai_pantry.entity.Recipe;
import com.example.ai_pantry.repository.PantryItemRepository;
import com.example.ai_pantry.repository.RecipeRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {


    private final RecipeRepository recipeRepository;

    private final PantryItemRepository pantryItemRepository;

    @Override
    public RecipeResponseDto addRecipe(
            RecipeRequestDto request
    ){

        Recipe recipe = Recipe.builder()

                .name(request.getName())
                .description(request.getDescription())
                .category(request.getCategory())
                .ingredients(request.getIngredients())
                .cookingTime(request.getCookingTime())

                .build();


        Recipe savedRecipe =
                recipeRepository.save(recipe);


        return mapToResponse(savedRecipe);
    }



    @Override
    public List<RecipeResponseDto> getAllRecipes(){

        return recipeRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }



    @Override
    public RecipeResponseDto getRecipeById(Long id){

        Recipe recipe =
                recipeRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Recipe not found with id: " + id)
                        );


        return mapToResponse(recipe);
    }

    @Override
    public List<RecipeRecommendationDto> recommendRecipes() {


        List<PantryItem> pantryItems =
                pantryItemRepository.findAll();


        List<String> pantryIngredients =
                pantryItems.stream()
                        .map(item ->
                                item.getName().toLowerCase()
                        )
                        .toList();



        return recipeRepository.findAll()
                .stream()
                .map(recipe -> {


                    String[] recipeIngredients =
                            recipe.getIngredients()
                                    .toLowerCase()
                                    .split(",");


                    int matched = 0;


                    for(String ingredient : recipeIngredients){

                        if(pantryIngredients.contains(
                                ingredient.trim()
                        )){
                            matched++;
                        }
                    }


                    int percentage =
                            (matched * 100)
                                    /
                                    recipeIngredients.length;


                    return RecipeRecommendationDto.builder()

                            .recipeId(recipe.getId())

                            .recipeName(recipe.getName())

                            .matchPercentage(percentage)

                            .build();

                })
                .filter(recipe ->
                        recipe.getMatchPercentage() > 0
                )
                .sorted(
                        (a,b) ->
                                b.getMatchPercentage()
                                        -
                                        a.getMatchPercentage()
                )
                .toList();
    }



    private RecipeResponseDto mapToResponse(
            Recipe recipe
    ){

        return RecipeResponseDto.builder()

                .id(recipe.getId())
                .name(recipe.getName())
                .description(recipe.getDescription())
                .category(recipe.getCategory())
                .ingredients(recipe.getIngredients())
                .cookingTime(recipe.getCookingTime())

                .build();
    }
}