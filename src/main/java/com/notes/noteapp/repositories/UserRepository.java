package com.notes.noteapp.repositories;

import com.notes.noteapp.dtos.UserDto;
import com.notes.noteapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByUsernameIgnoreCaseAndEnabled(String username, int enabled);
}
