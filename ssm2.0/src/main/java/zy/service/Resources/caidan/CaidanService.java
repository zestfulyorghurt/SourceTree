package zy.service.Resources.caidan;

import org.springframework.stereotype.Service;
import zy.pojo.caidan;

import java.util.List;
@Service
public interface CaidanService {

    public List<Object> getAllCaidan();
    public List<Object> getCaidanByType(Integer Type);
}
