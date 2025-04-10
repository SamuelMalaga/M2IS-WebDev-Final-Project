package M2ISNet.SNetBackend.Controllers;

import M2ISNet.SNetBackend.Services.TokenService;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;


@RestController
public class AuthController {

//    LoggerFactory.getLogger(AuthController.class);
//    private static final Logger LOG = (Logger) LoggerFactory.getLogger(AuthController.class);

    private final TokenService tokenService;

    public AuthController(TokenService tokenService){
        this.tokenService = tokenService;
    }
//    return new InMemoryUserDetailsManager(
//            User.withUsername("dvega")
//                        .password("{noop}password")
//                        .authorities("read")
//                        .build()
//        );

    @PostMapping("/token")
    public String token(Authentication authentication){

        System.out.println("Token requested for user: " + authentication.getName());

        String token = tokenService.generateToken(authentication);

        return token;
    }


}
