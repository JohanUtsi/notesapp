package com.notes.noteapp.services;

import com.notes.noteapp.dtos.MessageDto;

public interface MessageService {
    MessageDto getMessage(Long id);
}
