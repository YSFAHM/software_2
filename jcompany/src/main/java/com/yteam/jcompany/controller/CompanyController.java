package com.yteam.jcompany.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yteam.jcompany.dto.CompanyDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.service.Interface.CompanyService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestHeader;



@RestController
@RequestMapping("/companies")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @GetMapping("/all")
    public ResponseEntity<List<CompanyDto>> getAllCompanies() {
        List<CompanyDto> companies=companyService.getAllCompanies();
        return ResponseEntity.ok(companies);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateCompany(@RequestBody @Valid CompanyDto companyDto,@PathVariable Long id) {
        ResponseDto responseDto = companyService.updateCompany(id,companyDto);
        
        return ResponseEntity.ok(responseDto);
    }
    @GetMapping("{id}")
    public CompanyDto getCompanyByID(@PathVariable Long id) {
        return companyService.findCompanyById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteCompany(@PathVariable Long id){
        ResponseDto responseDto = companyService.deleteCompany(id);
        return ResponseEntity.ok(responseDto);

    }
    
    
    
}
