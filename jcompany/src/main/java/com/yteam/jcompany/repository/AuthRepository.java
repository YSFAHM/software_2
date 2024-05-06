package com.yteam.jcompany.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yteam.jcompany.model.Auth;

import java.util.Optional;


public interface AuthRepository extends JpaRepository<Auth,Long> {
    Optional<Auth> findByUserName(String userName);
    Boolean existsByUserName(String userName);
    Optional<Auth> findByLoginKey(String loginKey);
    
}