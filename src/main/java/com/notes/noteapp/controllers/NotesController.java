package com.notes.noteapp.controllers;


import com.notes.noteapp.dtos.NoteDto;
import com.notes.noteapp.entities.User;
import com.notes.noteapp.services.MessageService;
import com.notes.noteapp.services.UserService;
import com.notes.noteapp.services.impl.NoteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NoteServiceImpl noteService;

    @Autowired
    private UserService userService;

    @Autowired
    private MessageService messageService;

    @PostMapping
    public ResponseEntity<?> saveNote(@RequestBody NoteDto noteDto,
                                      Principal principal) {
        System.out.println(principal.getName());
        Optional<User> user = userService.findByUsername(principal.getName());
        noteService.save(noteDto.getTitle(), noteDto.getNoteContent(), user.orElse(null));

        return ResponseEntity.ok(messageService.getMessage(1l));

    }

    @PutMapping
    public ResponseEntity<?> updateNote(@RequestBody NoteDto noteDto) {
        noteService.update(noteDto);
        return ResponseEntity.ok(messageService.getMessage(2l));
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> getAll(Principal principal) {
        Optional<User> user = userService.findByUsername(principal.getName());
        return ResponseEntity.ok(noteService.getAll(user.orElse(null)));
    }

    @GetMapping
    public ResponseEntity<?> getOneById(@Param("id") Long id) {
        return ResponseEntity.ok(noteService.getOneById(id));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteOneById(@Param("id") Long id) {
        noteService.deleteOneById(id);
        return ResponseEntity.ok(messageService.getMessage(3l));
    }
}
