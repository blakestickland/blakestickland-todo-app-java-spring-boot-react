import axios from "axios";

class TodoDataService {
  executeHelloWorldService(name) {
    // console.log("executed service");
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }
  retrieveAllTodos(name) {
    // console.log("executed service");
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }
}

export default new TodoDataService(); // exports an instance of the class.