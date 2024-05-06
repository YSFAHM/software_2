package com.yteam.jcompany.model;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Auth {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id", updatable = false)
    Long id;

    @Column(name = "user_name", nullable = false, unique = true)
    String userName;

    @Column(name = "password", nullable = false)
    String password;

    @Column(name = "login_key", nullable = false)
    String loginKey;

    @OneToOne(cascade=CascadeType.ALL)
    @OnDelete(action = OnDeleteAction.CASCADE)
    
    @JoinColumn(name = "company_id", nullable = false)
    Company company;
    
}
