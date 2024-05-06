package com.yteam.jcompany.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.yteam.jcompany.model.Company;

public interface CompanyRepository extends JpaRepository<Company,Long> {
    Optional<Company> findByEmail(String email);
    Optional<Company> findByPhoneNumber(String phoneNumber);
    Boolean existsByEmail(String email);
    Boolean existsByPhoneNumber(String phoneNumber);
}
