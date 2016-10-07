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

import dao.BeerCateDao;
import vo.BeerCate;
import vo.JsonResult;

//@Controller
//@RequestMapping("/beercate/")
//public class BeerCateController {
//  
//  @Autowired BeerCateDao beerCateDao;
//  
//  @RequestMapping(path="list")
//  public Object list(
//      @RequestParam(defaultValue="1") int pageNo,
//      @RequestParam(defaultValue="10") int length) throws Exception {
//    
//    try {
//      HashMap<String,Object> map = new HashMap<>();
//      map.put("startIndex", (pageNo - 1) * length);
//      map.put("length", length);
//      
//      List<BeerCate> list = beerCateDao.selectList(map);
//      return JsonResult.success(list);
//    }catch (Exception e) {
//      return JsonResult.fail(e.getMessage());
//    }
//  }
//}
  

@Controller
@RequestMapping("/beercate/")
public class BeerCateController {
  
  @Autowired BeerCateDao beerCateDao;
  
  @RequestMapping(path="list")
  public Object list() throws Exception {
    
    try {
      List<BeerCate> list = beerCateDao.selectList();
      return JsonResult.success(list);
    }catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
}
  
