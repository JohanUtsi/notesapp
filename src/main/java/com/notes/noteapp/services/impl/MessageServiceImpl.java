package com.notes.noteapp.services.impl;

import com.notes.noteapp.dtos.MessageDto;
import com.notes.noteapp.entities.Message;
import com.notes.noteapp.repositories.MessageRepository;
import com.notes.noteapp.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    MessageRepository messageRepository;

    @Override
    public MessageDto getMessage(Long id){
        Optional<Message> message = messageRepository.findById(id);
        return new MessageDto(message.orElse(null).getId(),
                message.orElse(null).getMessage(), message.orElse(null).getDuration(),
                message.orElse(null).getAction());
    }
}
