package com.notes.noteapp.services.impl;

import com.notes.noteapp.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.UUID;

@Service
public class EmailServiceImpl implements EmailService{

    @Autowired
    @Qualifier("mailSender")
    JavaMailSender javaMailSender;

    private String url = "http://localhost:4200/activate/";

    public void sendEmail(String email, String firstName, String lastName, String username, String uniqueCode, String textContent) {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, "utf-8");

        String urlWithUid=url+uniqueCode;

        String emailContent = "<p>Hi "+ firstName+",</p> <p>Please click on this <a href="+
                urlWithUid+">link</a> to activate your account</p>"+textContent;

        try {
            mimeMessage.setContent(emailContent, "text/html");
            mimeMessageHelper.setTo(email);
            mimeMessageHelper.setSubject("Activation e-mail for Notes");
            javaMailSender.send(mimeMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
