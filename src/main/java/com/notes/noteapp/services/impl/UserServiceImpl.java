package com.notes.noteapp.services.impl;

import com.notes.noteapp.dtos.UserDto;
import com.notes.noteapp.entities.User;
import com.notes.noteapp.repositories.UserRepository;
import com.notes.noteapp.repositories.UserRoleRepository;
import com.notes.noteapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Service("UserService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    @Transactional
    public void save(final User user) {
        userRepository.save(user);
    }

    @Override
    public Optional<User> find(final Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsernameIgnoreCaseAndEnabled(username,1);
    }


    private User dtoToEntity(UserDto userDto) {
        User u = new User();
        u.setFirstName(userDto.getFirstName());
        u.setLastName(userDto.getLastName());
        u.setUsername(userDto.getUsername());
        u.setUserRole(userRoleRepository.findById(1L));

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(userDto.getPassword());

        u.setPassword(hashedPassword);

        return u;
    }
}
