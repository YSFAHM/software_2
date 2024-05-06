package com.yteam.jcompany.service.Interface;

import java.util.List;

import com.yteam.jcompany.dto.ApplicationDto;
import com.yteam.jcompany.dto.ResponseDto;

public interface ApplicationService {
    public List<ApplicationDto> getAllApplicationsByJobId(Long jobID);
    public ResponseDto addApplication(ApplicationDto applicationDto);
    public ResponseDto deleteApplication(Long id);
    public ApplicationDto getApplicationById(Long id);
}
