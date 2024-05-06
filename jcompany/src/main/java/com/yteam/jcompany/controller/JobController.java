package com.yteam.jcompany.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.yteam.jcompany.dto.JobDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.service.Interface.JobService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;




@RestController
@RequestMapping("/jobs")
public class JobController {
    @Autowired
    private JobService jobService;
    @GetMapping("/all")
    public ResponseEntity<List<JobDto>> getAllJobs() {
        return ResponseEntity.ok(jobService.getAllJobs());
    }
    @GetMapping("/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable Long id) {
        return ResponseEntity.ok(jobService.getJobById(id));
    }
    @GetMapping("/companies/{Companyid}")
    public ResponseEntity<List<JobDto>> getAllJobsByCompanyId(@PathVariable Long Companyid) {
        return ResponseEntity.ok(jobService.getAllJobsByCompanyId(Companyid));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteJob(@PathVariable Long id){
        ResponseDto responseDto = jobService.deleteJobById(id);
        return ResponseEntity.ok(responseDto);

    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateJob(@RequestBody @Valid JobDto jobDto,@PathVariable Long id) {
        ResponseDto responseDto = jobService.updateJob(id,jobDto);
        
        return ResponseEntity.ok(responseDto);
    }
    @PostMapping("/")
    public ResponseEntity<ResponseDto> addJob(@RequestBody @Valid JobDto jobDto) {
        ResponseDto responseDto=jobService.addJob(jobDto);
        return ResponseEntity.ok(responseDto);
    }
    
    
}
