package com.notes.noteapp.services;

import com.notes.noteapp.entities.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserService {

    @Transactional
    void save(User user);

    Optional<User> find(Long id);

    Optional<User> findByUsername(String username);

}
