package zy.pojo;

import org.springframework.stereotype.Component;

@Component
public class room {
    private Integer id;
    private Integer roomType;
    private String roomId;
    private String roomUserIdCard;
    private Integer roomStart;
    private Integer roomOrder;
    private String roomStartTime;
    private String roomEndTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRoomType() {
        return roomType;
    }

    public void setRoomType(Integer roomType) {
        this.roomType = roomType;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getRoomUserIdCard() {
        return roomUserIdCard;
    }

    public void setRoomUserIdCard(String roomUserIdCard) {
        this.roomUserIdCard = roomUserIdCard;
    }

    public Integer getRoomStart() {
        return roomStart;
    }

    public void setRoomStart(Integer roomStart) {
        this.roomStart = roomStart;
    }

    public Integer getRoomOrder() {
        return roomOrder;
    }

    public void setRoomOrder(Integer roomOrder) {
        this.roomOrder = roomOrder;
    }

    public String getRoomStartTime() {
        return roomStartTime;
    }

    public void setRoomStartTime(String roomStartTime) {
        this.roomStartTime = roomStartTime;
    }

    public String getRoomEndTime() {
        return roomEndTime;
    }

    public void setRoomEndTime(String roomEndTime) {
        this.roomEndTime = roomEndTime;
    }
}
