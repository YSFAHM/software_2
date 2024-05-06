package com.yteam.jcompany.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yteam.jcompany.dto.ApplicationDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.service.Interface.ApplicationService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/applications")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;
    @GetMapping("/{id}")
    public ResponseEntity<ApplicationDto> getApplicationById(@PathVariable Long id) {
        
        return ResponseEntity.ok(applicationService.getApplicationById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteApplication(@PathVariable Long id){
        ResponseDto responseDto = applicationService.deleteApplication(id);
        return ResponseEntity.ok(responseDto);
    }

        @PostMapping("/")
    public ResponseEntity<ResponseDto> addApplication(@RequestBody @Valid ApplicationDto applicationDto) {
        ResponseDto responseDto=applicationService.addApplication(applicationDto);
        return ResponseEntity.ok(responseDto);
    }

        @GetMapping("/jobs/{jobId}")
    public ResponseEntity<List<ApplicationDto>> getAllApplicationsByJobId(@PathVariable Long jobId) {
        return ResponseEntity.ok(applicationService.getAllApplicationsByJobId(jobId));
    }


    
}
