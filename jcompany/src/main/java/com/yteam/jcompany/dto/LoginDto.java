package com.yteam.jcompany.dto;


import com.yteam.jcompany.model.Auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginDto {

    @NotBlank(message = "user name is required")
    private String userName;
    @NotBlank(message = "password is required")
    private String password;

    public static Auth toModel(LoginDto loginDto){
        Auth auth = new Auth();
        auth.setUserName(loginDto.getUserName());
        auth.setPassword(loginDto.getPassword());
        return auth;
    }
    
    public static LoginDto toDto(Auth auth){
        LoginDto loginDto = new LoginDto();
        loginDto.setUserName(auth.getUserName());
        loginDto.setPassword(auth.getPassword());
        return loginDto;

    }

}
