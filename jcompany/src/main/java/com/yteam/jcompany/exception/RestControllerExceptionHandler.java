package com.yteam.jcompany.exception;


import java.util.List;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.yteam.jcompany.dto.ResponseDto;

@RestControllerAdvice
public class RestControllerExceptionHandler {
    
    @ExceptionHandler(UnauthenticatedException.class)
	// @ResponseBody
	// // @ResponseStatus(code = HttpStatus.UNAUTHORIZED)
	public ResponseEntity<ResponseDto> resolveException(UnauthenticatedException exception) {

		ResponseDto responseDto = new ResponseDto(exception.getMessage());
		return new ResponseEntity<>(responseDto, HttpStatus.UNAUTHORIZED);
	}

    @ExceptionHandler({ MethodArgumentNotValidException.class })
	public ResponseEntity<ResponseDto> resolveException(MethodArgumentNotValidException ex) {
		List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();
        String message = "";
		for (FieldError error : fieldErrors) {
			message = message.concat(error.getDefaultMessage()+" ");
		}
        ResponseDto responseDto = new ResponseDto(message);
		return new ResponseEntity<>(responseDto, HttpStatus.BAD_REQUEST);
				
	}

@ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<ResponseDto> resolveException(DuplicateKeyException exception) {

		ResponseDto responseDto = new ResponseDto(exception.getMessage());
		return new ResponseEntity<>(responseDto, HttpStatus.BAD_REQUEST);
	}

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ResponseDto> resolveException(ResourceNotFoundException exception) {

		ResponseDto responseDto = new ResponseDto(exception.getMessage());
		return new ResponseEntity<>(responseDto, HttpStatus.BAD_REQUEST);
	}



}
