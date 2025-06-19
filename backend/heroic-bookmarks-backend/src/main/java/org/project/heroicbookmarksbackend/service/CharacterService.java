package org.project.heroicbookmarksbackend.service;

import org.project.heroicbookmarksbackend.entity.CharacterEntity;
import org.project.heroicbookmarksbackend.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {

    @Autowired
    private CharacterRepository characterRepository;

    // Service layer for the GET call
    public List<CharacterEntity> getAllCharacters() {
        return characterRepository.findAll();
    }

    // Service layer for the POST call
    public void addCharacters(CharacterEntity characterEntity) {
        CharacterEntity character = new CharacterEntity();
        character.setCode(characterEntity.getCode());
        character.setName(characterEntity.getName());
        character.setImage(characterEntity.getImage());
        character.setBackground(characterEntity.getBackground());
        character.setBiome(characterEntity.getBiome());
        character.setSpecies(characterEntity.getSpecies());
        character.setFaction(characterEntity.getFaction());
        character.setStory(characterEntity.getStory());
        characterRepository.save(characterEntity);
    }

    // Service layer to find the characters by code
    public CharacterEntity getCharacterByCode(String code) {
        return characterRepository.findByCode(code);
    }
}
