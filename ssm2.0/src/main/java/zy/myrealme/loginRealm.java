package zy.myrealme;

import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import zy.pojo.user;
import zy.service.Login.LoginServiceImpl;
import zy.util.passwordService;

import javax.annotation.Resource;
import java.util.List;

@Component
//extends AuthorizingRealm
public class loginRealm extends AuthorizingRealm {
    Logger logger = LoggerFactory.getLogger(loginRealm.class);
    @Autowired
    private LoginServiceImpl loginService;
    @Resource
    private user user;
    @Autowired
    private passwordService passwordService;
    //授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        logger.info("执行授权方法...");
        return null;
    }

    //认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        logger.info(token.getUsername()+'\n'+token.getPassword()+'\n'+token.getPrincipal()+'\n'+token.getCredentials());
        String dbpassword = new String((char[])token.getCredentials());
        List<user> users = loginService.selectByName(token.getUsername());
            if(users.size()>0){
                for (user u:users){
                    if(passwordService.encryption(dbpassword,u.getSalt()).equals(u.getUserPassword())){
                        logger.info("密码正确");
                        return new SimpleAuthenticationInfo(token,dbpassword,u.getSalt());
                    }
                }
                logger.info("密码不正确");
                return null;
            }
            logger.info("用户不存在");
        return null;
    }
}
