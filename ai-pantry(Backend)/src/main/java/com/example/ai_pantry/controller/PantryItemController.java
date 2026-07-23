package com.example.ai_pantry.controller;


import com.example.ai_pantry.dto.ExpiryAlertResponseDto;
import com.example.ai_pantry.dto.PantryItemRequestDto;
import com.example.ai_pantry.dto.PantryItemResponseDto;
import com.example.ai_pantry.service.PantryItemService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/pantry/items")
@RequiredArgsConstructor
public class PantryItemController {


    private final PantryItemService pantryItemService;



    @PostMapping
    public ResponseEntity<PantryItemResponseDto> addItem(
            @RequestBody PantryItemRequestDto request
    ){

        return new ResponseEntity<>(
                pantryItemService.addItem(request),
                HttpStatus.CREATED
        );
    }



    @GetMapping
    public ResponseEntity<List<PantryItemResponseDto>> getAllItems() {

        return ResponseEntity.ok(
                pantryItemService.getAllItems()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<PantryItemResponseDto> getItemById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                pantryItemService.getItemById(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<PantryItemResponseDto> updateItem(
            @PathVariable Long id,
            @RequestBody PantryItemRequestDto request
    ) {

        return ResponseEntity.ok(
                pantryItemService.updateItem(id, request)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(
            @PathVariable Long id
    ) {

        pantryItemService.deleteItem(id);

        return ResponseEntity.ok(
                "Pantry item deleted successfully"
        );
    }

    @GetMapping("/expiry-alerts")
    public ResponseEntity<List<ExpiryAlertResponseDto>> getExpiryAlerts(){

        return ResponseEntity.ok(
                pantryItemService.getExpiryAlerts()
        );
    }

}