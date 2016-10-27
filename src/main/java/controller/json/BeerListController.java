package controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dao.BeerDao;
import dao.BeerListDao;
import dao.BeerPhotoDao;
import vo.Beer;
import vo.BeerPhoto;
import vo.JsonResult;

@Controller
@RequestMapping("/beerlist/")
public class BeerListController {
  
  @Autowired BeerListDao beerListDao;
  @Autowired BeerDao beerDao;
  @Autowired BeerPhotoDao beerPhotoDao;
  
  @RequestMapping(path="brandlist")
  public Object brandList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectBrandList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="subcatelist")
  public Object subCateList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectSubCateListAll();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  @RequestMapping(path="ctrylist")
  public Object ctryList() throws Exception{
    
    try {
      List<Beer> list = beerListDao.selectCtryList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="complist")
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
      List<Beer> subCateList = beerListDao.searchSubCateNo(map);
      
      
      if(brandList.isEmpty() && subCateList.isEmpty()) { // 둘다 비어있을 경우
        return JsonResult.fail();
      } else if (!brandList.isEmpty() && subCateList.isEmpty()) { //brandList에서 찾았을 경우
        beer.setBrbrno(brandList.get(0).getBrbrno());
        beer = beerDao.selectOneBrand(beer.getBrbrno());
        return JsonResult.success(beer);
      } else if (brandList.isEmpty() && !subCateList.isEmpty()) { //subcateList에서 찾았을 경우
        beer.setScno(subCateList.get(0).getScno());
        beer = beerDao.selectOneCate(beer.getScno());
        return JsonResult.success(beer);
      } else {
        beer.setBrbrno(brandList.get(0).getBrbrno());
        beer = beerDao.selectOneBrand(beer.getBrbrno());
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
      String scname = beer.getScname();
      String ctryname = beer.getCountry();
      String company = beer.getCompany();
      
      HashMap<String, Object> map = new HashMap<>();
      map.put("brand", brbrname);
      map.put("subcate", scname);
      map.put("ctry", ctryname);
      map.put("comp", company);
      
      
      List<Beer> brandList = beerListDao.getBeerBrandNo(map);

      if(brandList.isEmpty() == true) {
       beerListDao.brandInsert(brbrname);
       map.put("brand", brbrname);
       brandList = beerListDao.getBeerBrandNo(map);
      }
      
      List<Beer> subCateList = beerListDao.getBeerSubCateNo(map);
      List<Beer> ctryList = beerListDao.getBeerCtryNo(map);
      List<Beer> compList = beerListDao.getBeerCompNo(map);
      
      
      if(compList.isEmpty() == true) {
        beerListDao.compInsert(company);
        map.put("comp", company);
        compList = beerListDao.getBeerCompNo(map);
      }
      
      beer.setBrbrno(brandList.get(0).getBrbrno());
      beer.setScno(subCateList.get(0).getScno());
      beer.setCtryno(ctryList.get(0).getCtryno());
      beer.setCono(compList.get(0).getCono());
      
      
      beerListDao.insert(beer);
      
      //사진 추가하기
      
      BeerPhoto beerPhoto = new BeerPhoto();
      beerPhoto.setBrno(beerDao.getBrnoDesc().getNo());
      beerPhoto.setBrphoto_path(beer.getBrphoto_path());
      
      beerPhotoDao.insert(beerPhoto);
      
      
      return JsonResult.success();
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  @RequestMapping(path="subcateale")
  public Object subCateAle() throws Exception{
    try {
      List<Beer> list = beerListDao.getAleList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="subcatelager")
  public Object subCateLager() throws Exception{
    
    try {
      List<Beer> list = beerListDao.getLagerList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="subcateetc")
  public Object subCateEtc() throws Exception{
    
    try {
      List<Beer> list = beerListDao.getEtcList();
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  @RequestMapping(path="subcatelistone")
  public Object subCateListOne(int no) throws Exception {
    try {
      List<Beer> list = beerListDao.selectSubCateListOne(no);
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="selectonephoto")
  public Object selectOnePhoto(int no) throws Exception {
    try {
      List<BeerPhoto> list = beerPhotoDao.selectOnePhoto(no);
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  
  
}
