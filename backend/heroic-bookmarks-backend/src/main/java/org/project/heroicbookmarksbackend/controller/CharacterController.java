package org.project.heroicbookmarksbackend.controller;

import org.project.heroicbookmarksbackend.entity.CharacterEntity;
import org.project.heroicbookmarksbackend.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/characters")
@CrossOrigin(origins = "http://localhost:5173")
public class CharacterController {

    @Autowired
    private CharacterService characterService;

    // GET REQUEST
    @GetMapping
    public ResponseEntity<?> getAllCharacters() {
        return new ResponseEntity<>(characterService.getAllCharacters(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addCharacter(@RequestBody CharacterEntity characterEntity) {
        try {
            characterService.addCharacters(characterEntity);
            return new ResponseEntity<>(characterEntity,  HttpStatus.CREATED);
        }catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> getCharacterByCode(@PathVariable String code) {
        CharacterEntity character = characterService.getCharacterByCode(code);

        if(character==null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(character);
    }
}
