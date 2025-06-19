package org.project.heroicbookmarksbackend.controller;

import org.project.heroicbookmarksbackend.entity.UserEntity;
import org.project.heroicbookmarksbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserEntity user) {
        UserEntity newUser = userService.signUp(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserEntity user) {
        try {
            UserEntity loggedInUser = userService.login(user.getEmail(), user.getPassword());
            return ResponseEntity.ok(loggedInUser);
        }catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
