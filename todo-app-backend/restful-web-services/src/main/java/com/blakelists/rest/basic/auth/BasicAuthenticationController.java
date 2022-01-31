package com.blakelists.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller -- we want to handle rest requests so add annotation
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthenticationController {
	
	//hello-world-bean
	@GetMapping(path = "/basicauth")
	public AuthenticationBean authenticationBean() {
		return new AuthenticationBean("You are authenticated!");
	}
}
