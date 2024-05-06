package com.yteam.jcompany.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yteam.jcompany.model.Job;
import java.util.List;
import java.util.Optional;


public interface JobRepository extends JpaRepository<Job,Long> {
    List<Job> findByCompanyId(Long id);
    Optional<Job> findByTitle(String title);
    Boolean existsByTitle(String title);
}
