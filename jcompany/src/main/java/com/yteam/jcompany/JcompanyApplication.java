package com.yteam.jcompany;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class JcompanyApplication {

	public static void main(String[] args) {
		SpringApplication.run(JcompanyApplication.class, args);
	}

}
