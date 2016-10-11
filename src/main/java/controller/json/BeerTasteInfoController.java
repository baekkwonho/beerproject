package controller.json;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import dao.BeerDao;
import dao.BeerTasteInfoDao;
import dao.MemberDao;
import vo.BeerTasteInfo;
import vo.JsonResult;

@Controller
@RequestMapping("/beertasteinfo/")
public class BeerTasteInfoController {
  
  
  @Autowired BeerTasteInfoDao beerTasteInfoDao;
  
  @RequestMapping(path="list")
  public Object list(int no) throws Exception{
    
    
    try {
      List<BeerTasteInfo> list = beerTasteInfoDao.selectList(no);
      if (list.size() == 1) {
        return JsonResult.success(list);
      } else {
      /*  for (int i = 0; i < list.size() - 1; i++) {
          BeerTasteInfo ct = list.get(i + 1);
          temp.setBitter(temp.getBitter() + ct.getBitter());
          temp.setSour(temp.getSour() + ct.getSour());
          temp.setSweet(temp.getSweet() + ct.getSweet());
          temp.setSparkle(temp.getSparkle() + ct.getSparkle());
          temp.setBody(temp.getBody() + ct.getBody());
          temp.setAroma(temp.getAroma() + ct.getAroma());
        }
        temp.setBitter(temp.getBitter() / list.size());
        temp.setSour(temp.getSour() / list.size());
        temp.setSweet(temp.getSweet() / list.size());
        temp.setSparkle(temp.getSparkle() / list.size());
        temp.setBody(temp.getBody() / list.size());
        temp.setAroma(temp.getAroma() / list.size());
        
        List<BeerTasteInfo> resultList = (List<BeerTasteInfo>) temp; 
        */
        
        
        List<BeerTasteInfo> resultList = tasteCalc(list);
        
        return JsonResult.success(resultList);
      }
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="add")
  public Object add(BeerTasteInfo beerTasteInfo) throws Exception {
    
    
    try {
      beerTasteInfoDao.insert(beerTasteInfo);
      return JsonResult.success(beerTasteInfo);
      
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
    }
  }
 
  
  
  
  List<BeerTasteInfo> tasteCalc(List<BeerTasteInfo> list) {
    
    BeerTasteInfo temp = list.get(0);
    for (int i = 0; i < list.size() - 1; i++) {
      BeerTasteInfo ct = list.get(i + 1);
      temp.setBitter(temp.getBitter() + ct.getBitter());
      temp.setSour(temp.getSour() + ct.getSour());
      temp.setSweet(temp.getSweet() + ct.getSweet());
      temp.setSparkle(temp.getSparkle() + ct.getSparkle());
      temp.setBody(temp.getBody() + ct.getBody());
      temp.setAroma(temp.getAroma() + ct.getAroma());
      temp.setScore(temp.getScore() + ct.getScore());
    }
    temp.setBitter(temp.getBitter() / list.size());
    temp.setSour(temp.getSour() / list.size());
    temp.setSweet(temp.getSweet() / list.size());
    temp.setSparkle(temp.getSparkle() / list.size());
    temp.setBody(temp.getBody() / list.size());
    temp.setAroma(temp.getAroma() / list.size());
    temp.setScore((float)((Math.round((temp.getScore() / list.size())*10)/10.0)));
    
    List<BeerTasteInfo> resultList = new ArrayList<BeerTasteInfo>();
    resultList.add(temp);
    
    return resultList;
  }
  
  
}


