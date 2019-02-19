package com.notes.noteapp.services.impl;

import com.notes.noteapp.entities.User;
import com.notes.noteapp.entities.Uuid;
import com.notes.noteapp.repositories.UserRepository;
import com.notes.noteapp.repositories.UuidRepository;
import com.notes.noteapp.services.ActivationService;
import com.notes.noteapp.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class ActivationServiceImpl implements ActivationService {

    @Autowired
    private UuidRepository uuidRepository;
    @Autowired
    private EmailService emailService;


    @Override
    @Transactional
    public boolean activate(String code) {
        Optional<Uuid> activationSetOpt = this.uuidRepository.findByUuid(code);
        if (activationSetOpt.isPresent()) {
            Uuid activationSet = activationSetOpt.get();
            LocalDateTime createdTime = activationSet.getDateAdded();
            LocalDateTime now = LocalDateTime.now();
            if ((createdTime.getDayOfYear() == now.getDayOfYear())
                    && (createdTime.getYear() == now.getYear())
                    && (now.getHour() - createdTime.getHour() <= 2)) {
                User u = activationSet.getUser();
                u.setEnabled(1);
                return true;
            }else{
                User user = activationSet.getUser();
                UUID newUniqueCode = UUID.randomUUID();
                String textContent = "<p>Your previous activation link expired. Please click on the new link provided to activate your account</p>";

                emailService.sendEmail(user.getEmail(), user.getFirstName(), user.getLastName(),
                        user.getUsername() ,newUniqueCode.toString(), textContent);
                return false;
            }
        } else {
            return false;
        }
    }

    @Override
    public void save(User user, String uuid) {
        Uuid activationSet = new Uuid();
        activationSet.setUser(user);
        activationSet.setUuid(uuid);
        activationSet.setDateAdded(LocalDateTime.now());
        uuidRepository.save(activationSet);
    }
}
