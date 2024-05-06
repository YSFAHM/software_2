package com.yteam.jcompany.service.Implementation;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.yteam.jcompany.dto.ApplicationDto;
import com.yteam.jcompany.dto.ResponseDto;
import com.yteam.jcompany.exception.ResourceNotFoundException;
import com.yteam.jcompany.mapper.ApplicationMapper;
import com.yteam.jcompany.model.Application;
import com.yteam.jcompany.repository.ApplicationRepository;
import com.yteam.jcompany.service.Interface.ApplicationService;

@Service
public class ApplicationServiceImp implements ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;

    
    @Override
    public List<ApplicationDto> getAllApplicationsByJobId(Long jobID) {
        List<Application> applications= applicationRepository.findAllByJobId(jobID);
        if(applications.size()==0) throw new ResourceNotFoundException("nothing found");
        List<ApplicationDto> applicationsDtos = new ArrayList<>();
        for(Application application : applications ){
            applicationsDtos.add(ApplicationMapper.toDto(application));
        }
        return applicationsDtos;
    }

    @Override
    public ResponseDto addApplication(ApplicationDto applicationDto) {
        Application recievedApplication = ApplicationMapper.toModel(applicationDto);
        applicationRepository.save(recievedApplication);
        return new ResponseDto("application Added Successfully");
    }

    @Override
    public ResponseDto deleteApplication(Long id) {
        applicationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("company does not exist"));
        applicationRepository.deleteById(id);
        return new ResponseDto("application deleted successfully");
    }

    @Override
    public ApplicationDto getApplicationById(Long id) {
        Application application = applicationRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("application not found"));
        return ApplicationMapper.toDto(application);
    }
    
}
