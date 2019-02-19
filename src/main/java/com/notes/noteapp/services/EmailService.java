package com.notes.noteapp.services;

public interface EmailService {
    void sendEmail(String email, String firstName, String lastName, String username, String uniqueCode, String textContent);
}
