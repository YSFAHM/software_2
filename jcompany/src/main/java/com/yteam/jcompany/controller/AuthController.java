package com.yteam.jcompany.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yteam.jcompany.dto.LoginDto;
import com.yteam.jcompany.dto.LoginResponseDto;
import com.yteam.jcompany.dto.RegisterDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.service.Interface.AuthServcie;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;




@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthServcie authServcie;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> Login(@RequestBody @Valid LoginDto loginDto) {
        LoginResponseDto loginResponseDto = authServcie.login(loginDto);
        
        return ResponseEntity.ok(loginResponseDto);
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDto> Register(@RequestBody @Valid RegisterDto registerDto) {
        ResponseDto responseDto = authServcie.register(registerDto);
        return new ResponseEntity<>(responseDto,HttpStatus.CREATED);
    }

    @GetMapping("/test")
    public void getMethodName() {
    }
    
}


