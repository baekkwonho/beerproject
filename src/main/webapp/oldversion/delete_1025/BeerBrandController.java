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
import vo.JsonResult;

@Controller
@RequestMapping("/beerbrand/")
public class BeerBrandController {
  
  @Autowired BeerBrandDao beerBrandDao;
  
  @RequestMapping(path="list")
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length) throws Exception {
    
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
      
      List<BeerCate> list = beerBrandDao.selectList(map);
      
      return JsonResult.success(list);
    }catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
}
  
