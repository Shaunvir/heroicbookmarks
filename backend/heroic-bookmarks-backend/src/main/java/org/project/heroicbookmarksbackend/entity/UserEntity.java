package org.project.heroicbookmarksbackend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "user")
@Data
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue
    private Long userId;

    @Column(name = "username")
    private String username;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;

}
