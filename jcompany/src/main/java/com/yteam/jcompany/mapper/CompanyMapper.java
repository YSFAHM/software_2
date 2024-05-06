package com.yteam.jcompany.mapper;

import com.yteam.jcompany.dto.CompanyDto;
import com.yteam.jcompany.model.Company;

public class CompanyMapper {

    public static Company toModel(CompanyDto companyDto) {
        Company company = new Company();
        company.setId(companyDto.getId());
        company.setName(companyDto.getName());
        company.setEmail(companyDto.getEmail());
        company.setPhoneNumber(companyDto.getPhoneNumber());
        company.setService(companyDto.getService());
        company.setDescription(companyDto.getDescription());
        company.setAddress(companyDto.getAddress());
        company.setNumberOfEmployee(companyDto.getNumberOfEmployee());
        return company;
    }

    public static CompanyDto toDto(Company company) {
        CompanyDto companyDto = new CompanyDto();
        companyDto.setId(company.getId());
        companyDto.setName(company.getName());
        companyDto.setEmail(company.getEmail());
        companyDto.setPhoneNumber(company.getPhoneNumber());
        companyDto.setService(company.getService());
        companyDto.setDescription(company.getDescription());
        companyDto.setAddress(company.getAddress());
        companyDto.setNumberOfEmployee(company.getNumberOfEmployee());
        return companyDto;
    }
    
}
