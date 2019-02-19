package com.notes.noteapp.dtos;

public class MessageDto {
    private Long id;
    private String message;
    private int duration;
    private String action;

    public MessageDto() {
    }

    public MessageDto(String message) {
        this.message = message;
    }

    public MessageDto(Long id, String message, int duration, String action) {
        this.id = id;
        this.message = message;
        this.duration = duration;
        this.action = action;
    }

    public MessageDto(String message, int duration, String action) {
        this.message = message;
        this.duration = duration;
        this.action = action;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
