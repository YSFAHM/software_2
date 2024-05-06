package com.yteam.jcompany.service.Implementation;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.yteam.jcompany.dto.LoginDto;
import com.yteam.jcompany.dto.LoginResponseDto;
import com.yteam.jcompany.dto.RegisterDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.exception.UnauthenticatedException;
import com.yteam.jcompany.model.Auth;

import com.yteam.jcompany.repository.AuthRepository;
import com.yteam.jcompany.repository.CompanyRepository;
import com.yteam.jcompany.service.Interface.AuthServcie;

@Service
public class AuthServiceImp implements AuthServcie {
    @Autowired
    private AuthRepository authRepository;
    @Autowired
    private CompanyRepository companyRepository;

    public LoginResponseDto login(LoginDto loginDto){
        Auth recievedAuth = LoginDto.toModel(loginDto);
        Auth auth = authRepository.findByUserName(recievedAuth.getUserName()).orElseThrow(()->new UnauthenticatedException("user name not found"));
        if(recievedAuth.getPassword().equals(auth.getPassword())){
            return new LoginResponseDto(auth.getLoginKey(),auth.getCompany().getId());
        }else{
            throw new UnauthenticatedException("Wrong Password");
        }
        
    }

    public ResponseDto register(RegisterDto registerDto){
        Auth recievedAuth = RegisterDto.toModel(registerDto);
        UUID uuid = UUID.randomUUID();
        recievedAuth.setLoginKey(uuid.toString());
        Boolean isUserNameExist = authRepository.existsByUserName(recievedAuth.getUserName());
        if(isUserNameExist){
            throw new DuplicateKeyException("user name already exists");
        }
        Boolean isEmailExist = companyRepository.existsByEmail(recievedAuth.getCompany().getEmail());
        if(isEmailExist){
            throw new DuplicateKeyException("email already exists");
        }
        Boolean isPhoneNumberExist = companyRepository.existsByPhoneNumber(recievedAuth.getCompany().getPhoneNumber());
        if(isPhoneNumberExist){
            throw new DuplicateKeyException("phone number already exists");
        }

        authRepository.save(recievedAuth);
        return new ResponseDto("account Created successfully");

    }
    public Boolean isAuthenticated(String loginKey){
        Optional<Auth> auth =authRepository.findByLoginKey(loginKey);
        if(auth.equals(Optional.empty())){
            return false;
        }
        else return true;
    }
    
}
