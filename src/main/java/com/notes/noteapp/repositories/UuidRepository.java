package com.notes.noteapp.repositories;

import com.notes.noteapp.entities.Uuid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UuidRepository extends JpaRepository<Uuid, Long> {

    Optional<Uuid> findByUuid(String uuid);


}
