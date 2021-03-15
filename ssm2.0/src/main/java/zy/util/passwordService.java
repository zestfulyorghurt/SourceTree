package zy.util;

import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Component;

@Component
public class passwordService {
    public String Encryptionpassword;
    public String encryption(String password,String salt){
        Encryptionpassword = new Md5Hash(password,salt,3).toString();
        return Encryptionpassword;
    }

}
