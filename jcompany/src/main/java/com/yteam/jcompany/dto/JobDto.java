package com.yteam.jcompany.dto;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class JobDto {


    private Long id;

    @NotBlank(message = "title is required")
    private String title;

    @NotBlank(message = "location is required")
    private String location;

    @NotBlank(message = "seniority level is required")
    private String seniorityLevel;

    @NotBlank(message = "salary is required")
    private String salary;

    @NotBlank(message = "description is required")
    private String description;

    @NotNull(message = "work time is required")
    private Double workTime;

    @NotBlank(message = "employment type is required")
    private String employmentType;

    @NotNull(message = "company id is required")
    private Long companyId;
    
}
