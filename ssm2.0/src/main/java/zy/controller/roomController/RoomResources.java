package zy.controller.roomController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import zy.controller.BaseController;
import zy.pojo.room;
import zy.service.Resources.room.RoomService;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class RoomResources {
    @Autowired
    private RoomService roomService;
    public static final Logger logger = LoggerFactory.getLogger(RoomResources.class);
    //根据房间类型获取房间
    @RequestMapping("/getRoomByType")
    @ResponseBody
    public Map<String,List<room>> getRoomByType(@RequestBody Integer roomType){
        HashMap<String,List<room>> room = new HashMap<>();
        //logger.error(roomType.toString());
        room.put("rooms",roomService.getRoomByType(roomType));
        logger.error(room.get("rooms").toString());
        return room;
    }

    //获取所有的房间
    @RequestMapping("/getAllRoom")
    @ResponseBody
    public Map<String, List<Object>> getRoomInfo(){
        HashMap<String,List<Object>> rooms = new HashMap();
        rooms.put("rooms",roomService.getAllRoom());
        return rooms;
    }
}
