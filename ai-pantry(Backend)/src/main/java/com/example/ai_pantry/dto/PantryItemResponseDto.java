package com.example.ai_pantry.dto;


import lombok.*;

import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PantryItemResponseDto {


    private Long id;

    private String name;

    private String category;

    private Integer quantity;

    private String unit;

    private LocalDate expiryDate;

}