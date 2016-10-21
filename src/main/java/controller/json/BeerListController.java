package controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dao.BeerDao;
import dao.BeerListDao;
import vo.Beer;
import vo.JsonResult;

@Controller
@RequestMapping("/beerlist/")
public class BeerListController {
  
  @Autowired BeerListDao beerListDao;
  @Autowired BeerDao beerDao;
  
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
  
  @RequestMapping(path="compList")
  public Object compList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectCompList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="search")
  public Object search(Beer beer) throws Exception{
    try {
      String search = beer.getSearch();
      HashMap<String,Object> map = new HashMap<>();
      map.put("search", search);
      
      List<Beer> brandList = beerListDao.searchBrandNo(map);
      List<Beer> cateList = beerListDao.searchCateNo(map);
      
      
      if(brandList.isEmpty() && cateList.isEmpty()) {
        return JsonResult.fail();
      } else if (!brandList.isEmpty() && cateList.isEmpty()) {
        beer.setBrbrno(brandList.get(0).getBrbrno());
        beer = beerDao.selectOne(beer.getBrbrno());
        return JsonResult.success(beer);
      } else if (brandList.isEmpty() && !cateList.isEmpty()) {
        beer.setCateno(cateList.get(0).getCateno());
        beer = beerDao.selectOneCate(beer.getCateno());
        return JsonResult.success(beer);
      } else {
        beer.setBrbrno(brandList.get(0).getBrbrno());
        beer = beerDao.selectOne(beer.getBrbrno());
        return JsonResult.success(beer);
      }
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  
  @RequestMapping(path="add")
  public Object add(Beer beer) throws Exception{
    try {
      String brbrname = beer.getBrbrname();
      String catename = beer.getCatename();
      String ctryname = beer.getCountry();
      String company = beer.getCompany();
      
      HashMap<String, Object> map = new HashMap<>();
      map.put("brand", brbrname);
      map.put("cate", catename);
      map.put("ctry", ctryname);
      map.put("comp", company);
      
      
      List<Beer> brandList = beerListDao.getBeerBrandNo(map);

      if(brandList.isEmpty() == true) {
       beerListDao.brandInsert(brbrname);
       map.put("brand", brbrname);
       brandList = beerListDao.getBeerBrandNo(map);
      }
      
      List<Beer> cateList = beerListDao.getBeerCateNo(map);
      List<Beer> ctryList = beerListDao.getBeerCtryNo(map);
      List<Beer> compList = beerListDao.getBeerCompNo(map);
      
      
      if(compList.isEmpty() == true) {
        beerListDao.compInsert(company);
        map.put("comp", company);
        compList = beerListDao.getBeerCompNo(map);
      }
      
      Beer brand = brandList.get(0);
      Beer cate = cateList.get(0);
      Beer ctry = ctryList.get(0);
      Beer comp = compList.get(0);
      int brbrno = brand.getBrbrno();
      int cateno = cate.getCateno();
      int ctryno = ctry.getCtryno();
      int cono = comp.getCono();
      beer.setBrbrno(brbrno);
      beer.setCateno(cateno);
      beer.setCtryno(ctryno);
      beer.setCono(cono);
      
      beerListDao.insert(beer);
      return JsonResult.success();
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  @RequestMapping(path="cateinfoale")
  public Object cateInfoAle() throws Exception{
    
    try {
      List<Beer> list = beerListDao.getAleList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="cateinfolager")
  public Object cateInfoLager() throws Exception{
    
    try {
      List<Beer> list = beerListDao.getLagerList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="cateinfoetc")
  public Object cateInfoEtc() throws Exception{
    
    try {
      List<Beer> list = beerListDao.getEtcList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
}
