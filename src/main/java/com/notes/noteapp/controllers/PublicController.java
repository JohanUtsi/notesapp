package com.notes.noteapp.controllers;

import com.notes.noteapp.dtos.MessageDto;
import com.notes.noteapp.dtos.RegisterDto;
import com.notes.noteapp.entities.User;
import com.notes.noteapp.entities.Uuid;
import com.notes.noteapp.repositories.UserRoleRepository;
import com.notes.noteapp.services.*;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static lombok.AccessLevel.PACKAGE;
import static lombok.AccessLevel.PRIVATE;

@RestController
@RequestMapping("/public")
public class PublicController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRoleRepository userRoleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private EmailService emailService;
    @Autowired
    private ActivationService activationService;
    @Autowired
    private SharedNotesService sharedNotesService;
    @Autowired
    private MessageService messageService;


    @RequestMapping(value = "/register", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> register(@RequestBody RegisterDto registerDto
    ) {
        User u = new User();
        u.setUsername(registerDto.getUsername());
        u.setFirstName(registerDto.getFirstName());
        u.setLastName(registerDto.getLastName());
        u.setEmail(registerDto.getEmail());
        u.setPassword(bCryptPasswordEncoder.encode(registerDto.getPassword()));
        u.setEnabled(0);
        u.setUserRole(userRoleRepository.findById(1));

        UUID uniqueCode = UUID.randomUUID();
        String textContent = "<p>This link expires in 2 hours, so please make sure to click it within that time. </br>" +
                "If you exceed 2 hours, don't worry: a new link will be provided! </p>";

        emailService.sendEmail(registerDto.getEmail(), registerDto.getFirstName(),
                registerDto.getLastName(), registerDto.getUsername(), uniqueCode.toString(), textContent);
        userService.save(u);

        activationService.save(u, uniqueCode.toString());
        return ResponseEntity.ok(messageService.getMessage(4l));

    }


    @PutMapping(value="/activate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> activate (@RequestParam("code") String code){

        return activationService.activate(code)
                ? ResponseEntity.ok(messageService.getMessage(5l))
                : ResponseEntity.badRequest().body(messageService.getMessage(6l));
    }


    @PutMapping(value = "/share", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> enableShare(@RequestParam("id") Long id){
        return ResponseEntity.ok(sharedNotesService.shareNote(id));
    }

    @GetMapping(value ="/share", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getSharedItem(@RequestParam(value = "uuid", required = false) String uuid,
                                           @RequestParam(value = "id", required = false) Long id) {
        if(uuid != null && id != null){
            return ResponseEntity.ok(messageService.getMessage(9L));
        }else if(uuid == null && id == null){
            return ResponseEntity.ok(messageService.getMessage(9L));
        }else if (uuid != null) {
            return ResponseEntity.ok(sharedNotesService.getNote(uuid));
        }else if(id != null){
            return  ResponseEntity.ok(sharedNotesService.getSharedNote(id));
        }else{
            return ResponseEntity.ok(messageService.getMessage(9L));
        }
    }
}
