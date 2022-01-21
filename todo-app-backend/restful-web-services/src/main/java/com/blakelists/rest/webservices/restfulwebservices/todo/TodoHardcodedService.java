package com.blakelists.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "blakelists", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "blakelists", "Learn about Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "blakelists", "Learn about Microservices", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}
}
