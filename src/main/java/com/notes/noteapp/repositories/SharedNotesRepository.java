package com.notes.noteapp.repositories;

import com.notes.noteapp.entities.Notes;
import com.notes.noteapp.entities.SharedNotes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface SharedNotesRepository extends JpaRepository<SharedNotes, Long> {

    Optional<SharedNotes> findByShareUuidAndShared(String shareUuid, int shared);
    Optional<SharedNotes> findByNote(Notes notes);
}
