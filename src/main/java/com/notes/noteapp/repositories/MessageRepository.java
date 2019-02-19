package com.notes.noteapp.repositories;

import com.notes.noteapp.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
