package com.stackroute.maverick.token;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.stackroute.maverick.domain.User;

import java.util.Date;


@Component
public class JwtTokenProvider {

   // private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

    private String jwtSecret ="thisiskey";

    private int jwtExpirationInMs = 24*60*2;
    
    @Autowired
    User userPrincipal;
    
    @Bean
    public User user() {
    	return new User();
    }

    public String generateToken(Authentication authentication) {
    	Object obj=  authentication.getPrincipal();
    	userPrincipal.setEmail(obj.toString());
    	System.out.println("------------------------"+userPrincipal.getEmail());
    	
    	
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        
        //userPrincipal.setEmail(data);
        
        String token= Jwts.builder()
                .setSubject((userPrincipal.getEmail()))
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
        
        System.out.println("---------------------token--------------"+token);
        
        
        return token;
    }

    /*public int getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();

        return Integer.parseInt(claims.getSubject());
    }*/

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex) {
            System.out.println("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
        	System.out.println("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
        	System.out.println("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
        	System.out.println("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
        	System.out.println("JWT claims string is empty.");
        }
        return false;
    }
}