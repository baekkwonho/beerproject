package controller.json;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dao.BeerCateDao;
import vo.BeerCate;
import vo.JsonResult;

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
  
