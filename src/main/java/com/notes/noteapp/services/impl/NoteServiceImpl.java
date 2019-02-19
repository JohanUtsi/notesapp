package com.notes.noteapp.services.impl;

import com.notes.noteapp.dtos.NoteDto;
import com.notes.noteapp.entities.Notes;
import com.notes.noteapp.entities.User;
import com.notes.noteapp.repositories.NotesRepository;
import com.notes.noteapp.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NotesRepository notesRepository;

    @Override
    public void save(String title, String content, User user) {

        Notes note = new Notes();
        note.setTitle(title);
        note.setContent(content);
        note.setUser(user);
        note.setActive(1);
        note.setCreatedDate(Timestamp.valueOf(LocalDateTime.now()));
        notesRepository.save(note);
    }

    @Override
    @Transactional
    public void update(NoteDto noteDto) {
        Notes note = notesRepository.findById(noteDto.getId()).orElse(new Notes());
        note.setTitle(noteDto.getTitle());
        note.setContent(noteDto.getNoteContent());
        note.setEditedDate(Timestamp.valueOf(LocalDateTime.now()));
    }

    @Override
    public List<NoteDto> getAll(User user) {
        return notesRepository.getAllFromId(user);
    }

    @Override
    public NoteDto getOneById(Long id) {
        return entityToDto(notesRepository.findById(id));
    }

    @Transactional
    @Override
    public void deleteOneById(Long id) {
        //notesRepository.deleteById(id);
        notesRepository.softDelete(id);
    }

    private NoteDto entityToDto(Optional<Notes> note) {
        NoteDto noteDto = new NoteDto();
        noteDto.setId(note.get().getId());
        noteDto.setTitle(note.get().getTitle());
        noteDto.setNoteContent(note.get().getContent());
        return noteDto;
    }
}
