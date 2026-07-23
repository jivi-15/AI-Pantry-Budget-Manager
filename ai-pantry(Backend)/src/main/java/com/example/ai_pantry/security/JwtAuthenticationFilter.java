package com.example.ai_pantry.security;


import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

import static javax.crypto.Cipher.SECRET_KEY;


@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {


    private final JwtService jwtService;


    public JwtAuthenticationFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {


        String authHeader = request.getHeader("Authorization");
        System.out.println("Authorization Header = " + authHeader);

        System.out.println("Authorization Header: " + authHeader);

        if(authHeader == null || !authHeader.startsWith("Bearer ")){

            filterChain.doFilter(request,response);
            return;
        }


        String token = authHeader.substring(7);
        System.out.println("Token = " + token);


        String email = null;

        try {
            email = jwtService.extractUsername(token);
            System.out.println("Email = " + email);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if(email != null &&
                SecurityContextHolder.getContext().getAuthentication() == null){


            UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                            email,
                            null,
                            null
                    );


            SecurityContextHolder
                    .getContext()
                    .setAuthentication(authentication);

        }


        filterChain.doFilter(request,response);
    }
}