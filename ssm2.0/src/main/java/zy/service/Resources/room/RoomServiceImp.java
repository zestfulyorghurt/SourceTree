package zy.service.Resources.room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import zy.dao.RoomMapper;
import zy.pojo.room;
import zy.service.Resources.room.RoomService;

import java.util.List;

@Service
public class RoomServiceImp implements RoomService {
    @Autowired
    RoomMapper roomMapper;

    @Override
    public List<Object> getAllRoom() {
        return roomMapper.selectRoom();
    }

    @Override
    public List<room> getRoomByType(Integer type) {
        List<room> rooms = roomMapper.selectRoomByType(type);
        return rooms;
    }
}
