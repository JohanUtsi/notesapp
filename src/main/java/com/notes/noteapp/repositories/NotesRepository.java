package com.notes.noteapp.repositories;

import com.notes.noteapp.dtos.NoteDto;
import com.notes.noteapp.entities.Notes;
import com.notes.noteapp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NotesRepository extends JpaRepository<Notes, Long> {
    Notes save (Notes note);

    @Query("select new com.notes.noteapp.dtos.NoteDto(n.id, n.title, n.content) from Notes n where n.user =:user and n.active=1")
    List<NoteDto> getAllFromId(@Param("user") User user);

    @Modifying
    @Query("update Notes n set active=0 where n.id=:id")
    void softDelete(@Param("id") Long id);
}
