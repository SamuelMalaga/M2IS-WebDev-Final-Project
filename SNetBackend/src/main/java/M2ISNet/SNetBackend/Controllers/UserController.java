package M2ISNet.SNetBackend.Controllers;

import M2ISNet.SNetBackend.DataTransferObjects.RegisterUserForm;
import M2ISNet.SNetBackend.Models.User;
import M2ISNet.SNetBackend.ResponseObjects.ResponseTransfer;
import M2ISNet.SNetBackend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:6161")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public ResponseEntity<String> createUser(
            @RequestBody RegisterUserForm registerUserForm
    ){
        System.out.println(registerUserForm.getUser_email());
        if(userService.findUserByEmail(registerUserForm.getUser_email()).isPresent()){
            System.out.println("Not allowed to create");
            return new ResponseEntity<>("This email is already in use", HttpStatus.NOT_ACCEPTABLE);
        } else {
            System.out.println("Allowed to create");
            userService.createUser(
                    registerUserForm.getUser_name(),
                    registerUserForm.getUser_email(),
                    registerUserForm.getUser_birth_date(),
                    registerUserForm.getUser_password()
            );
            return new ResponseEntity<>("User Created Successfully", HttpStatus.OK);
        }
    }



}
