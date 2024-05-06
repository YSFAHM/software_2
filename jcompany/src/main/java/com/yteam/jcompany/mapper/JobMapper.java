package com.yteam.jcompany.mapper;

import com.yteam.jcompany.dto.JobDto;
import com.yteam.jcompany.model.Company;
import com.yteam.jcompany.model.Job;

public class JobMapper {

    public static Job toModel(JobDto jobDto){
        Job job = new Job();
        Company company = new Company();
        company.setId(jobDto.getCompanyId());
        job.setId(jobDto.getId());
        job.setTitle(jobDto.getTitle());
        job.setLocation(jobDto.getLocation());
        job.setSeniorityLevel(jobDto.getSeniorityLevel());
        job.setSalary(jobDto.getSalary());
        job.setDescription(jobDto.getDescription());
        job.setWorkTime(jobDto.getWorkTime());
        job.setEmploymentType(jobDto.getEmploymentType());
        job.setCompany(company);
        return job;
    
    }

    public static JobDto toDto(Job job){
        JobDto jobDto = new JobDto();
        jobDto.setId(job.getId());
        jobDto.setTitle(job.getTitle());
        jobDto.setLocation(job.getLocation());
        jobDto.setSeniorityLevel(job.getSeniorityLevel());
        jobDto.setSalary(job.getSalary());
        jobDto.setDescription(job.getDescription());
        jobDto.setWorkTime(job.getWorkTime());
        jobDto.setEmploymentType(job.getEmploymentType());
        jobDto.setCompanyId(job.getCompany().getId());
        return jobDto;
        
    }
    
}
