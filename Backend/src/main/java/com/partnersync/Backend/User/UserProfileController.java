package com.partnersync.Backend.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user-profile")
public class UserProfileController {

    @GetMapping
    public ResponseEntity<T> getUserProfile(){

    }

    @PostMapping
    public ResponseEntity<T> createUserProfile(){

    }

    @GetMapping("/role")
    public ResponseEntity<String> getUserRole(){

    }

}
