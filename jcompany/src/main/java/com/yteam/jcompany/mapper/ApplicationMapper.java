package com.yteam.jcompany.mapper;

import com.yteam.jcompany.dto.ApplicationDto;
import com.yteam.jcompany.model.Application;
import com.yteam.jcompany.model.Job;

public class ApplicationMapper {

    public static ApplicationDto toDto(Application application) {
        ApplicationDto applicationDto = new ApplicationDto();
        applicationDto.setId(application.getId());
        applicationDto.setName(application.getName());
        applicationDto.setEmail(application.getEmail());
        applicationDto.setPhoneNumber(application.getPhoneNumber());
        applicationDto.setCvUrl(application.getCvUrl());
        applicationDto.setJobId(application.getJob().getId());
    
        return applicationDto;
    }

    public static Application toModel(ApplicationDto applicationDto) {
        Application application = new Application();
        Job job = new Job();
        job.setId(applicationDto.getJobId());
        application.setId(applicationDto.getId());
        application.setName(applicationDto.getName());
        application.setEmail(applicationDto.getEmail());
        application.setPhoneNumber(applicationDto.getPhoneNumber());
        application.setCvUrl(applicationDto.getCvUrl());
        application.setJob(job);
    
        return application;
    }
    
}
