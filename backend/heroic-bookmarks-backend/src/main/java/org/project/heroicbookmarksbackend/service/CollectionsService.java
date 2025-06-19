package org.project.heroicbookmarksbackend.service;

import org.project.heroicbookmarksbackend.entity.CharacterEntity;
import org.project.heroicbookmarksbackend.entity.CollectionsEntity;
import org.project.heroicbookmarksbackend.entity.UserEntity;
import org.project.heroicbookmarksbackend.repository.CharacterRepository;
import org.project.heroicbookmarksbackend.repository.CollectionsRepository;
import org.project.heroicbookmarksbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CollectionsService {

    @Autowired
    private CollectionsRepository collectionsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CharacterRepository characterRepository;

    public String saveCharacterToCollection(String username, String code) {
        UserEntity user = userRepository.findByEmail(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        CharacterEntity character = characterRepository.findByCode(code);

        if(collectionsRepository.existsByUserAndCharacter(user, character)) {
            return "Character is already in your collection";
        }

        CollectionsEntity collection = new CollectionsEntity();
        collection.setUser(user);
        collection.setCharacter(character);

        collectionsRepository.save(collection);
        return "Character is saved to the location";
    }
}
