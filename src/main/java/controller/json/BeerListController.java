package controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dao.BeerListDao;
import vo.Beer;
import vo.JsonResult;

@Controller
@RequestMapping("/beerlist/")
public class BeerListController {
  
  @Autowired BeerListDao beerListDao;
  
  @RequestMapping(path="brandList")
  public Object brandList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectBrandList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="cateList")
  public Object cateList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectCateList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="ctryList")
  public Object ctryList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectCtryList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="add")
  public Object add(Beer beer) throws Exception{
    try {
      String brbrname = beer.getBrbrname();
      String catename = beer.getCatename();
      String ctryname = beer.getCountry();
      
      HashMap<String, Object> map = new HashMap<>();
      map.put("brand", brbrname);
      map.put("cate", catename);
      map.put("ctry", ctryname);
      
      
      List<Beer> brandList = beerListDao.getBeerBrandNo(map);

      if(brandList.isEmpty() == true) {
       beerListDao.brandInsert(brbrname);
       map.put("brand", brbrname);
       brandList = beerListDao.getBeerBrandNo(map);
      }
      
      List<Beer> cateList = beerListDao.getBeerCateNo(map);
      List<Beer> ctryList = beerListDao.getBeerCtryNo(map);
      
      Beer brand = brandList.get(0);
      Beer cate = cateList.get(0);
      Beer ctry = ctryList.get(0);
      int brbrno = brand.getBrbrno();
      int cateno = cate.getCateno();
      int ctryno = ctry.getCtryno();
      beer.setBrbrno(brbrno);
      beer.setCateno(cateno);
      beer.setCtryno(ctryno);
      
      beerListDao.insert(beer);
      return JsonResult.success();
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
}
