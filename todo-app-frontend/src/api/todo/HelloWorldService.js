import axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        // console.log("executed service");
        return axios.get("http://localhost:8080/hello-world");
    }

    executeHelloWorldBeanService() {
        // console.log("executed service bean");
        return axios.get("http://localhost:8080/hello-world-bean");
    }

    executeHelloWorldPathVariableService(name) {
        // console.log("executed service bean");
        // let username = "blakelists";
        // let password = "password";

        // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

        return axios.get(
          `http://localhost:8080/hello-world/path-variable/${name}`
          // {
          //   headers: {
          //     authorization: basicAuthHeader
          //   }
          // }
        );
    }
}

export default new HelloWorldService();