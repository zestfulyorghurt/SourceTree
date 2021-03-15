package zy.controller.CaidanResources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import zy.pojo.caidan;
import zy.service.Resources.caidan.CaidanService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CaidanResources {
    @Autowired
    private CaidanService caidanService;
    @RequestMapping("/getAllCai")
    @ResponseBody
    public Map<String, List<Object>> getAllCai(){
        HashMap<String,List<Object>> cais = new HashMap<>();
        List<Object> allCaidan = caidanService.getAllCaidan();
        cais.put("",allCaidan);
        return cais;
    }

    @RequestMapping("/getCaiByType")
    @ResponseBody
    public Map<String, List<Object>> getCaiByType(@RequestBody Integer Type){
        HashMap<String,List<Object>> cais = new HashMap<>();
        List<Object> allCaidan = caidanService.getCaidanByType(Type);
        cais.put("",allCaidan);
        return cais;
    }
}
