package controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import dao.BeerBrandDao;
import vo.BeerCate;

@Controller
@RequestMapping("/beerbrand/")
public class BeerBrandController {
  
  @Autowired BeerBrandDao beerBrandDao;
  
  @RequestMapping(path="list", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length) throws Exception {
    
    HashMap<String,Object> result = new HashMap<>();
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
      
      List<BeerCate> list = beerBrandDao.selectList(map);
      
      result.put("state", "success");
      result.put("data", list);
    }catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
  
  return new Gson().toJson(result);
  }
  
  
}
  
