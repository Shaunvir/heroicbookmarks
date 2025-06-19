package org.project.heroicbookmarksbackend.repository;

import org.project.heroicbookmarksbackend.entity.CharacterEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<CharacterEntity, Long> {
    CharacterEntity findByCode(String code);
}
