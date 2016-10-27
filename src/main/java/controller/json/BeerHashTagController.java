package controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dao.BeerDao;
import dao.BeerHashTagDao;
import vo.Beer;
import vo.BeerHashTag;
import vo.JsonResult;

@Controller
@RequestMapping("/hashtag/")
public class BeerHashTagController {
  
  @Autowired BeerHashTagDao beerHashTagDao;
  @Autowired BeerDao beerDao;
  
  @RequestMapping(path="tagadd")
  public Object BeerHashTagDaoAdd(BeerHashTag beerHashTag) throws Exception {
   
    try {
    int brno = beerHashTag.getBrno();
    String tagContent = beerHashTag.getTagContent();
    
    HashMap<String,Object> map = new HashMap<>();
    map.put("brno", brno);
    map.put("tagContent", tagContent);
    
    List<BeerHashTag> hashTagList = beerHashTagDao.selectHashTagBrno(map);
    
    
    //brno로 검색해온 리스트가 없을 경우
    if(hashTagList.size() == 0) {
      beerHashTagDao.insert(beerHashTag);
      return JsonResult.success();
    }
    
    //리스트가 있고, 내용값이 같은 경우 count증가
    for (int i = 0; i < hashTagList.size(); i++) {
      if (hashTagList.get(i).getTagContent().equals(tagContent)) {
        
        hashTagList.get(i).setTagCount(hashTagList.get(i).getTagCount() + 1);
        beerHashTagDao.updateHashTagCount(hashTagList.get(i));
        
        return JsonResult.success();
      }
    }
    
    //리스트는 있지만, 내용값이 없는 경우 새로 추가
      beerHashTagDao.insert(beerHashTag);
    
      return JsonResult.success();
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
      
    }
  }
  
  
  @RequestMapping(path="taglistscno")
  public Object BeerHashTagListScno(int no) throws Exception {
  
    try {
      Beer beer = beerDao.selectSubCateOneScno(no);
      int brno = beer.getNo();
      HashMap<String,Object> map = new HashMap<>();
      map.put("brno", brno);
      List<BeerHashTag> list = beerHashTagDao.selectHashTagBrno(map);
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="taglistbrno")
  public Object BeerHashTagListBrno(int no) throws Exception {
  
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("brno", no);
      List<BeerHashTag> list = beerHashTagDao.selectHashTagBrno(map);
      return JsonResult.success(list);
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
}
