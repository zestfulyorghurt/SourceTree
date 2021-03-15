package zy.dao;

import org.apache.ibatis.annotations.Mapper;
import zy.pojo.room;

import java.util.List;

@Mapper
public interface RoomMapper {
    public List<Object> selectRoom();
    public List<room> selectRoomByType(Integer roomType);
}
