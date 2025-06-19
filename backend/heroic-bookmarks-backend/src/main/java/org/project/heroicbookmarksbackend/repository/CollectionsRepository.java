package org.project.heroicbookmarksbackend.repository;

import org.project.heroicbookmarksbackend.entity.CharacterEntity;
import org.project.heroicbookmarksbackend.entity.CollectionsEntity;
import org.project.heroicbookmarksbackend.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionsRepository extends JpaRepository<CollectionsEntity, Long> {

    boolean existsByUserAndCharacter(UserEntity user, CharacterEntity character);
}
