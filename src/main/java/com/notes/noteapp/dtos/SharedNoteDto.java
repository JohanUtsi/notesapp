package com.notes.noteapp.dtos;

public class SharedNoteDto {
    private Long id;
    private NoteDto note;
    private String shareUuid;
    private Integer shared;

    public SharedNoteDto() {
    }

    public SharedNoteDto(Long id, NoteDto note, String shareUuid, Integer shared) {
        this.id = id;
        this.note = note;
        this.shareUuid = shareUuid;
        this.shared = shared;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public NoteDto getNote() {
        return note;
    }

    public void setNote(NoteDto note) {
        this.note = note;
    }

    public String getShareUuid() {
        return shareUuid;
    }

    public void setShareUuid(String shareUuid) {
        this.shareUuid = shareUuid;
    }

    public Integer getShared() {
        return shared;
    }

    public void setShared(Integer shared) {
        this.shared = shared;
    }
}
