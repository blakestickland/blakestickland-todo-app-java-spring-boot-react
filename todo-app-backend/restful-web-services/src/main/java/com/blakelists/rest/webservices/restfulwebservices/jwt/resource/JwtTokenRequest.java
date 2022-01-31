package com.blakelists.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    
//    {
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFrZWxpc3RzIiwiZXhwIjoxNjQ0MjIzODExLCJpYXQiOjE2NDM2MTkwMTF9.Y7-m8JC_Y0mGpc2X_GfpbnlNz__ycwNi_LvCV6ST-tm0Bn3cUrZzr37WrNHqE16PwM59tpB02g7AhnN6h0FYdQ"
//    	}
    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

