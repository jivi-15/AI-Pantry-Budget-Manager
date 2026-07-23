package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.ExpiryAlertResponseDto;
import com.example.ai_pantry.dto.PantryItemRequestDto;
import com.example.ai_pantry.dto.PantryItemResponseDto;

import java.util.List;


public interface PantryItemService {


    PantryItemResponseDto addItem(
            PantryItemRequestDto request
    );


    List<PantryItemResponseDto> getAllItems();

    PantryItemResponseDto getItemById(Long id);

    PantryItemResponseDto updateItem(
            Long id,
            PantryItemRequestDto request
    );

    void deleteItem(Long id);

    List<ExpiryAlertResponseDto> getExpiryAlerts();

}