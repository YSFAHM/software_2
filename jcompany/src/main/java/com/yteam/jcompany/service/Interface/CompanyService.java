package com.yteam.jcompany.service.Interface;

import java.util.List;

import com.yteam.jcompany.dto.CompanyDto;
import com.yteam.jcompany.dto.ResponseDto;

public interface CompanyService {
    public ResponseDto updateCompany(Long id,CompanyDto companyDto);
    public List<CompanyDto> getAllCompanies();
    public CompanyDto findCompanyById(Long Id);
    public ResponseDto deleteCompany(Long id);
    
}
