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
import vo.JsonResult;

@Controller
@RequestMapping("/beer/")
public class BeerController {
  
  @Autowired BeerDao beerDao;
  
  @RequestMapping(path="list")
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length) throws Exception{
    
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
      
      List<Beer> list = beerDao.selectList(map);
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="detail")
  @ResponseBody
  public Object detail(int no) throws Exception {
    HashMap<String,Object> result = new HashMap<>();
    try {
      Beer beer = beerDao.selectOne(no);
      
      if (beer == null) 
        throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
      
      return JsonResult.success(beer);
//      result.put("state", "success");
//      result.put("data", beer);s
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
//      result.put("state", "fail");
//      result.put("data", e.getMessage());
    }
  }
}
