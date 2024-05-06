package com.yteam.jcompany.service.Implementation;


import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.yteam.jcompany.dto.CompanyDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.exception.ResourceNotFoundException;
import com.yteam.jcompany.mapper.CompanyMapper;
import com.yteam.jcompany.model.Company;
import com.yteam.jcompany.repository.CompanyRepository;
import com.yteam.jcompany.service.Interface.CompanyService;


@Service
public class CompanyServiceImp implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public ResponseDto updateCompany(Long id,CompanyDto companyDto) {
        Company receivedCompany = CompanyMapper.toModel(companyDto);
        receivedCompany.setId(id);
        Company company = companyRepository.findById(receivedCompany.getId()).orElseThrow(()->new ResourceNotFoundException("Company does not exist"));
        Boolean isEmailExist = companyRepository.existsByEmail(receivedCompany.getEmail());
        if(isEmailExist&&!(company.getEmail().equals(receivedCompany.getEmail()))){
            throw new DuplicateKeyException("email already exists");
        }
        Boolean isPhoneNumberExist = companyRepository.existsByPhoneNumber(receivedCompany.getPhoneNumber());
        if(isPhoneNumberExist&&!(company.getPhoneNumber().equals(receivedCompany.getPhoneNumber()))){
            throw new DuplicateKeyException("phone number already exists");
        }
        companyRepository.save(receivedCompany);
        return new ResponseDto("company updated successfully");
    }
    
    public List<CompanyDto> getAllCompanies(){
        List<Company> companies= companyRepository.findAll();
        if(companies.size()==0) throw new ResourceNotFoundException("nothing found");
        List<CompanyDto> companiesDtos = new ArrayList<>();
        for(Company company : companies ){
            companiesDtos.add(CompanyMapper.toDto(company));
        }
        return companiesDtos;

    }

    public CompanyDto findCompanyById(Long id){
        Company company = companyRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("company does not exist"));
        return CompanyMapper.toDto(company);
    }

    public ResponseDto deleteCompany(Long id){
        companyRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("company does not exist"));
        companyRepository.deleteById(id);
        return new ResponseDto("company deleted successfully");
    }
}
