package org.project.heroicbookmarksbackend.controller;

import org.project.heroicbookmarksbackend.dto.CollectionsDTO;
import org.project.heroicbookmarksbackend.entity.CollectionsEntity;
import org.project.heroicbookmarksbackend.service.CollectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/collections")
@CrossOrigin(origins = "http://localhost:5173")
public class CollectionsController {

    @Autowired
    private CollectionsService collectionsService;

    @PostMapping("/save")
    public ResponseEntity<?> saveToCollection(@RequestBody CollectionsDTO collectionsDTO) {
        String result = collectionsService.saveCharacterToCollection(String.valueOf(collectionsDTO.getEmail()),
                                                                     collectionsDTO.getCode());
        return ResponseEntity.ok(result);
    }
}
