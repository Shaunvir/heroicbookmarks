package org.project.heroicbookmarksbackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "characters")
@Data
@NoArgsConstructor
public class CharacterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codeId;

    @Column(name="code")
    private String code;

    @Column(name = "title")
    private String name;

    @Column(name = "image")
    private String image;

    @Column(name = "background")
    private String background;

    @Column(name = "biome")
    private String biome;

    @Column(name = "species")
    private String species;

    @Column(name = "faction")
    private String faction;

    @Column(name = "story")
    private String story;

}
