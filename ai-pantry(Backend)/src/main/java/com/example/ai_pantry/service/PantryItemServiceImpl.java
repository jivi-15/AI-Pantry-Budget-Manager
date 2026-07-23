package com.example.ai_pantry.service;


import com.example.ai_pantry.dto.ExpiryAlertResponseDto;
import com.example.ai_pantry.dto.PantryItemRequestDto;
import com.example.ai_pantry.dto.PantryItemResponseDto;
import com.example.ai_pantry.entity.PantryItem;
import com.example.ai_pantry.enums.ExpiryStatus;
import com.example.ai_pantry.exception.ResourceNotFoundException;
import com.example.ai_pantry.repository.PantryItemRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.List;


@Service
@RequiredArgsConstructor
public class PantryItemServiceImpl implements PantryItemService {


    private final PantryItemRepository pantryItemRepository;


    @Override
    public PantryItemResponseDto addItem(
            PantryItemRequestDto request
    ) {


        PantryItem item = PantryItem.builder()

                .name(request.getName())
                .category(request.getCategory())
                .quantity(request.getQuantity())
                .unit(request.getUnit())
                .expiryDate(request.getExpiryDate())
                .addedDate(LocalDate.now())

                .build();


        PantryItem savedItem =
                pantryItemRepository.save(item);


        return mapToResponse(savedItem);
    }


    @Override
    public List<PantryItemResponseDto> getAllItems() {

        List<PantryItem> items = pantryItemRepository.findAll();

        return items.stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public PantryItemResponseDto getItemById(Long id) {

        PantryItem item = pantryItemRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Pantry item not found with id: " + id
                        )
                );

        return mapToResponse(item);
    }

    @Override
    public void deleteItem(Long id) {

        PantryItem item = pantryItemRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Pantry item not found with id: " + id
                        )
                );

        pantryItemRepository.delete(item);
    }

    @Override
    public PantryItemResponseDto updateItem(
            Long id,
            PantryItemRequestDto request
    ) {

        PantryItem item = pantryItemRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Pantry item not found with id: " + id
                        )
                );


        item.setName(request.getName());
        item.setCategory(request.getCategory());
        item.setQuantity(request.getQuantity());
        item.setUnit(request.getUnit());
        item.setExpiryDate(request.getExpiryDate());


        PantryItem updatedItem =
                pantryItemRepository.save(item);


        return mapToResponse(updatedItem);
    }

    @Override
    public List<ExpiryAlertResponseDto> getExpiryAlerts() {

        LocalDate today = LocalDate.now();

        return pantryItemRepository.findAll()
                .stream()
                .map(item -> {

                    ExpiryStatus status;

                    if(item.getExpiryDate().isBefore(today)) {

                        status = ExpiryStatus.EXPIRED;

                    } else if(
                            !item.getExpiryDate()
                                    .isAfter(today.plusDays(3))
                    ) {

                        status = ExpiryStatus.EXPIRING_SOON;

                    } else {

                        status = ExpiryStatus.FRESH;
                    }


                    return ExpiryAlertResponseDto.builder()
                            .id(item.getId())
                            .name(item.getName())
                            .expiryDate(item.getExpiryDate())
                            .status(status)
                            .build();

                })
                .toList();
    }



    private PantryItemResponseDto mapToResponse(
            PantryItem item
    ){

        return PantryItemResponseDto.builder()

                .id(item.getId())
                .name(item.getName())
                .category(item.getCategory())
                .quantity(item.getQuantity())
                .unit(item.getUnit())
                .expiryDate(item.getExpiryDate())

                .build();
    }
}