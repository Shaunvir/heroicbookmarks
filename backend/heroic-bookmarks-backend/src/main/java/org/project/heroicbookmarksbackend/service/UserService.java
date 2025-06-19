package org.project.heroicbookmarksbackend.service;

import org.project.heroicbookmarksbackend.entity.UserEntity;
import org.project.heroicbookmarksbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder encode;

    public UserEntity signUp(UserEntity user) {
        user.setPassword(encode.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public UserEntity login(String email, String password) {
        UserEntity user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));

        if(encode.matches(password, user.getPassword())) {
            return user;
        } else {
            throw new RuntimeException("Invalid password");
        }
    }
}
