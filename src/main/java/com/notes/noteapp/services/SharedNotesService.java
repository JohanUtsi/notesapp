package com.notes.noteapp.services;

import com.notes.noteapp.dtos.MessageDto;
import com.notes.noteapp.dtos.SharedNoteDto;

public interface SharedNotesService {
    MessageDto shareNote(long id);

    SharedNoteDto getNote(String uuid);

    SharedNoteDto getSharedNote(Long id);
}
