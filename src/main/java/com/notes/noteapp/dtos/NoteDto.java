package com.notes.noteapp.dtos;

import java.io.Serializable;

public class NoteDto implements Serializable {

    private Long id;
    private String title;
    private String noteContent;

    public NoteDto(){}

    public NoteDto(String title, String noteContent) {
        this.title = title;
        this.noteContent = noteContent;
    }

    public NoteDto(Long id, String title, String noteContent) {
        this.id = id;
        this.title = title;
        this.noteContent = noteContent;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNoteContent() {
        return noteContent;
    }

    public void setNoteContent(String noteContent) {
        this.noteContent = noteContent;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
