package zy.pojo;

import org.springframework.stereotype.Component;

import java.sql.Date;

@Component
public class user {
    private Integer id;
    private String userName;
    private String userPassword;
    private String userEmail;
    private Integer userRoles;
    private Integer userSex;
    private Date userBrithday;
    private String userRealName;
    private String userIdCard;
    //加密用的盐
    private String salt;

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Integer getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Integer userRoles) {
        this.userRoles = userRoles;
    }

    public Integer getUserSex() {
        return userSex;
    }

    public void setUserSex(Integer userSex) {
        this.userSex = userSex;
    }

    public Date getUserBrithday() {
        return userBrithday;
    }

    public void setUserBrithday(Date userBrithday) {
        this.userBrithday = userBrithday;
    }

    public String getUserRealName() {
        return userRealName;
    }

    public void setUserRealName(String userRealName) {
        this.userRealName = userRealName;
    }

    public String getUserIdCard() {
        return userIdCard;
    }

    public void setUserIdCard(String userIdCard) {
        this.userIdCard = userIdCard;
    }
}