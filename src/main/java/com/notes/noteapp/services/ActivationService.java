package com.notes.noteapp.services;

import com.notes.noteapp.entities.User;

public interface ActivationService {

    boolean activate(String code);

    void save(User user, String code);
}
