package zy.controller;

import org.apache.ibatis.annotations.Param;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import zy.pojo.user;
import zy.service.Login.LoginServiceImpl;
import zy.service.Resources.user.userServiceImp;
import zy.util.passwordService;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class BaseController {
    @Autowired
    private LoginServiceImpl loginService;
    @Autowired
    private user user;
    @Autowired
    private passwordService passwordService;
    @Autowired
    private userServiceImp userServiceImp;
    public static final Logger logger = LoggerFactory.getLogger(BaseController.class);
    //注册用户
    @RequestMapping("/regist")
    @ResponseBody
    public Map register(@RequestBody Map<String,String> user){
        logger.error(user.get("username")+user.get("password")+user.get("email")+user.get("sex"));
        HashMap<String,String> registerData = new HashMap<>();
        Integer sex = 0;
        if(user.get("sex").equals("0")){
            sex = 0;
        }else {
            sex = 1;
        }
        try{
            List<user> users = userServiceImp.selectUserByName(user.get("username"));
            if(users==null) {
                loginService.insertUser(user.get("username"), user.get("password"),user.get("email"),sex);
                registerData.put("message","注册成功");
                registerData.put("url","/Login");
            }else {
                registerData.put("message","注册失败,用户名已存在");
            }
        }catch(Exception e) {
            registerData.put("message","注册失败");
        }
        return registerData;
    }

    //验证用户名唯一
    @RequestMapping("/checkUsername")
    @ResponseBody
    public Map checkUsername(@RequestBody Map<String,String> username){
        HashMap<String,String> checkMessage = new HashMap<>();
        List<zy.pojo.user> users = null;
        try{
            users = userServiceImp.selectUserByName(username.get("username"));
        }catch (Exception e){
            checkMessage.put("message","用户名未被注册");
            return checkMessage;
        }
        if(users!=null){
            checkMessage.put("message","用户名已经被注册");
        }else{
            checkMessage.put("message","用户名未被注册");
        }
        return checkMessage;
    }


    //修改密码
    @RequestMapping("/changePassword")
    @ResponseBody
    public Map changePassword(@RequestBody Map<String,String> data){
        logger.error(data.toString());
        HashMap<String,String> changeData = new HashMap<String, String>();
        List<user> users = null;
        try{
            users = loginService.selectByName(data.get("username"));
        }catch (Exception e){
            changeData.put("message","用户名不存在");
            return changeData;
        }
        String salt = users.get(0).getSalt();
        String password = passwordService.encryption(data.get("password"), salt);
        HashMap<String,String> UpdateUser = new HashMap<>();
        UpdateUser.put("password",password);
        UpdateUser.put("username",data.get("username"));
        UpdateUser.put("email",data.get("emil"));
        userServiceImp.updataUserPassword(UpdateUser);
        changeData.put("message","修改密码成功");
        changeData.put("url","/Login");
        return changeData;
    }


    //用户登录
    @RequestMapping("/login")
    @ResponseBody
    public Map<String,String> login(@RequestBody Map<String,String> user,HttpServletRequest req) {
        String s = (String)req.getSession().getAttribute("555");
        req.getSession().setAttribute("messa","me");
        logger.info(s+"进入登录" + "用户名:" + user.get("username") + "密码:" + user.get("password"));
        HashMap<String,String> loginData = new HashMap<String,String>();
        UsernamePasswordToken token = new UsernamePasswordToken(user.get("username"),user.get("password"));
        Subject subject = SecurityUtils.getSubject();
        try{
            subject.login(token);
        }catch (Exception e){
            loginData.put("message","用户名或密码错误");
            return loginData;
        }
        List<user> users = loginService.selectByName(user.get("username"));
        Integer userRoles = users.get(0).getUserRoles();
        if(userRoles!=null){
            if(userRoles==0){
                loginData.put("role","0");
                loginData.put("url","/Root");
                loginData.put("username",user.get("username"));
                return loginData;
            }else if(userRoles==1){
                loginData.put("role","1");
                loginData.put("url","/User");
                loginData.put("username",user.get("username"));
                return loginData;
            }
        }
        loginData.put("url","/User");
        loginData.put("role","2");
        loginData.put("username",user.get("username"));
        return loginData;
    }


    //页面跳转
    @RequestMapping("/User")
    public String userView(){
        return "userViewFirst";
    }

    @RequestMapping("/Root")
    public String rootView(){
        return "userViewFirst";
    }

    @RequestMapping("/Login")
    public String loginView(){
        return "login";
    }



    @RequestMapping("/posttest")
    @ResponseBody
    public Map<String,Object> posttest(@RequestBody Map<String,String> data){
        HashMap<String,Object> ma = new HashMap<>();
        logger.error(data.get("22"));
        ma.put("message","错误");
        return ma;
    }
    @RequestMapping("/gettest")
    @ResponseBody
    public Map<String,Object> gettest(){
        HashMap<String,Object> ma = new HashMap<>();
        logger.error("进入gettest");
        ma.put("message","错误");
        return ma;
    }
}
