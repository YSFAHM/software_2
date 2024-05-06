package com.yteam.jcompany.service.Interface;

import com.yteam.jcompany.dto.LoginDto;
import com.yteam.jcompany.dto.LoginResponseDto;
import com.yteam.jcompany.dto.RegisterDto;
import com.yteam.jcompany.dto.ResponseDto;

public interface AuthServcie {
    public LoginResponseDto login(LoginDto loginDto);
    public ResponseDto register(RegisterDto registerDto);
    public Boolean isAuthenticated(String loginKey);
    
}
