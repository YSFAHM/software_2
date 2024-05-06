package com.yteam.jcompany.aspect;


import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yteam.jcompany.exception.UnauthenticatedException;

import com.yteam.jcompany.service.Interface.AuthServcie;

@Aspect
@Component
public class AuthAspect {
    @Autowired
    AuthServcie authServcie;
    @Before("execution(* com.yteam.jcompany.controller..*..*(..)) && args(.., loginKey)")
    public void beforeControllerMethodExecution(String loginKey) {
        String headerValue = loginKey;
        if(!authServcie.isAuthenticated(headerValue)){
            throw new UnauthenticatedException("you are not authenticated");
    }
}
}

