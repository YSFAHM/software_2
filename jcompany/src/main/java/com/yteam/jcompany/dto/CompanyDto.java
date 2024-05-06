package com.yteam.jcompany.dto;



import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class CompanyDto {

    private Long id;

    @NotBlank(message = "name is required")
    private String name;

    @NotBlank(message = "Email address is required")
    @Email(message = "Invalid email address")
    private String email;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "\\d{11}", message = "Phone number must be 11 digits")
    private String phoneNumber;

    @NotBlank(message = "name is required")
    private String service;

    @NotBlank(message = "description is required")
    private String description;

    @NotBlank(message = "address is required")
    private String address;

    @NotNull(message = "number of employee is required")
    private Integer numberOfEmployee;
}

