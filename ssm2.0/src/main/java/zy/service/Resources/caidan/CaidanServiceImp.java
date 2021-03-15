package zy.service.Resources.caidan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zy.dao.CaidanMapper;
import zy.pojo.caidan;

import java.util.List;

@Service
public class CaidanServiceImp implements CaidanService{
    @Autowired
    CaidanMapper caidanMapper;
    @Override
    public List<Object> getAllCaidan() {
        return caidanMapper.selectAllCaidan();
    }

    @Override
    public List<Object> getCaidanByType(Integer Type) {
        List<Object> caidans = caidanMapper.selectCaidanByType(Type);
        return caidans;
    }
}
