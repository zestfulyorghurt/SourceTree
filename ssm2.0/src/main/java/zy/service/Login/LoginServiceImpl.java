package zy.service.Login;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import zy.dao.UserMapper;
import zy.pojo.user;
import zy.util.passwordService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Random;

@Service
public class LoginServiceImpl implements LoginService {
    @Resource
    private UserMapper userMapper;
    @Resource
    private user user;
    @Resource
    private passwordService passwordService;
    public static final Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);
    @Override
    public List<user> selectByName(String username) {
        List<user> user = userMapper.selectUserByName(username);
        return user;
    }

    @Override
    public void insertUser(String username,String password,String email,Integer sex) {
        user.setUserName(username);
        user.setUserPassword(passwordService.encryption(password,new Random().nextInt(20)+username));
        user.setUserEmail(email);
        user.setUserSex(sex);
        user.setSalt(new Random().nextInt(20)+username);
        logger.error(user.getSalt());
        userMapper.insertUser(user);
    }
}
