package com.yteam.jcompany.dto;

import lombok.Data;

@Data
public class LoginResponseDto {
    private String loginKey;
    private Long companyid;

    public LoginResponseDto(String loginKey,Long companyid){
        this.loginKey=loginKey;
        this.companyid=companyid;
    }
}
