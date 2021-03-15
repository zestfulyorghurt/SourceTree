package zy.service.Resources.user;

import zy.pojo.user;

import java.util.HashMap;
import java.util.List;

public interface userService {
    public List<user> selectUserByName(String username);
    public void updataUserPassword(HashMap<String,String> userInfo);
}
