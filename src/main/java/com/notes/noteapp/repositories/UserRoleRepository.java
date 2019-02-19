package com.notes.noteapp.repositories;

import com.notes.noteapp.entities.UserRoles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRoles, Long> {
    UserRoles findById(long id);
}
