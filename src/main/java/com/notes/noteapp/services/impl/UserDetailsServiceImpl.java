package com.notes.noteapp.services.impl;


import com.notes.noteapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static java.util.Collections.emptyList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository applicationUserRepository;

    public UserDetailsServiceImpl(UserRepository applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        com.notes.noteapp.entities.User applicationUser = applicationUserRepository.
                findByUsernameIgnoreCaseAndEnabled(username, 1).orElseThrow(()-> new UsernameNotFoundException(username));

        return new User(applicationUser.getUsername(), applicationUser.getPassword(), emptyList());
    }
}
