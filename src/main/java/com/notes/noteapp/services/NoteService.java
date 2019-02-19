package com.notes.noteapp.services;

import com.notes.noteapp.dtos.NoteDto;
import com.notes.noteapp.entities.User;

import javax.transaction.Transactional;
import java.util.List;

public interface NoteService {
    void save(String title, String content, User user);

    void update(NoteDto noteDto);

    List<NoteDto> getAll(User user);

    NoteDto getOneById(Long id);

    void deleteOneById(Long id);
}
