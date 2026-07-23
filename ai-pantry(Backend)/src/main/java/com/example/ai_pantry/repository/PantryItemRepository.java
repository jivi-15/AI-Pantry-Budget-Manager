package com.example.ai_pantry.repository;


import com.example.ai_pantry.entity.PantryItem;
import com.example.ai_pantry.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface PantryItemRepository extends JpaRepository<PantryItem, Long> {


    List<PantryItem> findByUser(User user);

}