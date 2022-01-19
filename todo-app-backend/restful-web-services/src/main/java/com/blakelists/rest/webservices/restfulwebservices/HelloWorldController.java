package com.blakelists.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller -- we want to handle rest requests so add annotation
@RestController
public class HelloWorldController {
	
	//GET
	//URI -- /hello-world
	// method - "Hello World"
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hallo World";
	}
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HellowWorldBean helloWorldBean() {
		return new HellowWorldBean("Hallo World");
	}

	//hello-world-bean/path-variable/blakelists
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HellowWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HellowWorldBean(String.format("Hallo World, %s!", name));
	}
}
