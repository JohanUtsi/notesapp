package com.notes.noteapp.entities;

import javax.persistence.*;

@Entity
@Table(name = "shared_notes", schema = "notes")
public class SharedNotes {

    public SharedNotes(){}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "notes_id")
    private Notes note;

    @Column(name = "share_uuid")
    private String shareUuid;

    @Column(name = "shared")
    private int shared;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Notes getNote() {
        return note;
    }

    public void setNote(Notes note) {
        this.note = note;
    }

    public String getShareUuid() {
        return shareUuid;
    }

    public void setShareUuid(String shareUuid) {
        this.shareUuid = shareUuid;
    }

    public int getShared() {
        return shared;
    }

    public void setShared(int shared) {
        this.shared = shared;
    }
}
