package com.yteam.jcompany.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yteam.jcompany.model.Application;

public interface ApplicationRepository extends JpaRepository<Application,Long> {
    public List<Application> findAllByJobId(Long JobId);
    
}
