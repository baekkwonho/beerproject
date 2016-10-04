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

import dao.BeerDao;
import vo.Beer;

@Controller
@RequestMapping("/beer/")
public class BeerController {
  
  @Autowired BeerDao beerDao;
  
  @RequestMapping(path="list", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length) throws Exception{
    
    HashMap<String,Object> result = new HashMap<>();
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
      
      List<Beer> list = beerDao.selectList(map);
      
      result.put("state", "success");
      result.put("data", list);
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    
    return new Gson().toJson(result);
  }
  
  @RequestMapping(path="detail", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  @ResponseBody
  public String detail() throws Exception {
    HashMap<String,Object> result = new HashMap<>();
    
    try {
      Beer beer = beerDao.selectOne(1);
      
      if (beer == null) 
        throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
      
      result.put("state", "success");
      result.put("data", beer);
      
    } catch (Exception e) {
      result.put("state", "fail");
      result.put("data", e.getMessage());
    }
    
    return new Gson().toJson(result);
  }

}
