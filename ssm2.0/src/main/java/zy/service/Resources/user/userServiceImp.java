package zy.service.Resources.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zy.dao.UserMapper;
import zy.pojo.user;

import java.util.HashMap;
import java.util.List;
@Service
public class userServiceImp implements userService{
    @Autowired
    UserMapper userMapper;
    @Override
    public List<user> selectUserByName(String username) {
        List<user> users = userMapper.selectUserByName(username);
        return users;
    }

    @Override
    public void updataUserPassword(HashMap<String,String> userInfo) {

    }
}
