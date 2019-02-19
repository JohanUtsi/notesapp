package com.notes.noteapp.services.impl;

import com.notes.noteapp.dtos.MessageDto;
import com.notes.noteapp.dtos.NoteDto;
import com.notes.noteapp.dtos.SharedNoteDto;
import com.notes.noteapp.entities.SharedNotes;
import com.notes.noteapp.repositories.NotesRepository;
import com.notes.noteapp.repositories.SharedNotesRepository;
import com.notes.noteapp.services.MessageService;
import com.notes.noteapp.services.SharedNotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class SharedNotesServiceImpl implements SharedNotesService {

    @Autowired
    private SharedNotesRepository sharedNotesRepository;

    @Autowired
    private NotesRepository notesRepository;

    @Autowired
    private MessageService messageService;

    @Override
    public MessageDto shareNote(long id) {
        Optional<SharedNotes> sharedNote = sharedNotesRepository.findByNote(notesRepository.findById(id).orElse(null));
        if (!sharedNote.isPresent()) {
            SharedNotes newSharedNote = new SharedNotes();
            newSharedNote.setNote(notesRepository.findById(id).orElse(null));
            UUID uuid = UUID.randomUUID();
            newSharedNote.setShareUuid(uuid + "");
            newSharedNote.setShared(1);
            sharedNotesRepository.save(newSharedNote);
            return new MessageDto(uuid + "", 20000, "close");
        } else {
            return messageService.getMessage(8L);
        }
    }

    @Override
    public SharedNoteDto getNote(String uuid) {
        return entityToDto(sharedNotesRepository.findByShareUuidAndShared(uuid, 1).orElse(null));
    }

    @Override
    public SharedNoteDto getSharedNote(Long id) {
        return entityToDto(sharedNotesRepository.findByNote(
                notesRepository.findById(id).orElse(null)).orElse(null));
    }

    private SharedNoteDto entityToDto(SharedNotes sharedNote) {
        SharedNoteDto sharedNoteDto = new SharedNoteDto();
        NoteDto noteDto = new NoteDto();

        sharedNoteDto.setId(sharedNote.getId());

        noteDto.setId(sharedNote.getNote().getId());
        noteDto.setTitle(sharedNote.getNote().getTitle());
        noteDto.setNoteContent(sharedNote.getNote().getContent());

        sharedNoteDto.setNote(noteDto);
        sharedNoteDto.setShareUuid(sharedNote.getShareUuid());
        sharedNoteDto.setShared(sharedNote.getShared());

        return sharedNoteDto;
    }

}
