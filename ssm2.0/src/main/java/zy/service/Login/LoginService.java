package zy.service.Login;

import zy.pojo.user;

import java.util.List;

public interface LoginService {
    public List<user> selectByName(String username);
    public void insertUser(String username,String password,String email,Integer sex);
}
