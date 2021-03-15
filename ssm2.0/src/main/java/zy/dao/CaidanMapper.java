package zy.dao;

import org.apache.ibatis.annotations.Mapper;
import zy.pojo.caidan;

import java.util.List;

@Mapper
public interface CaidanMapper {
    public List<Object> selectAllCaidan();
    public List<Object> selectCaidanByType(Integer Type);
}
