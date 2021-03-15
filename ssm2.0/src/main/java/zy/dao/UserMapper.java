package zy.dao;

import org.apache.ibatis.annotations.Mapper;
import zy.pojo.user;

import java.util.HashMap;
import java.util.List;

@Mapper
public interface UserMapper {
    //通过用户名查找用户基本信息
    public List<user> selectUserByName(String username);
    //通过用户名删除用户基本信息
    public void deleteUserByName(String username);
    //添加用户
    public void insertUser(user user);
    //修改密码，根据用户名和邮箱
    public void updateUser(HashMap<String,String> userInfo);
}
