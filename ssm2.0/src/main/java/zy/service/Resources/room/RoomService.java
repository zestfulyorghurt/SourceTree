package zy.service.Resources.room;

import org.springframework.stereotype.Service;
import zy.pojo.room;

import java.util.List;

@Service
public interface RoomService {
    public List<Object> getAllRoom();
    public List<room> getRoomByType(Integer Type);
}
