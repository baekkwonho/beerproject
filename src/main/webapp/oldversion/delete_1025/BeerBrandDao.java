package dao;

import java.util.List;
import java.util.Map;

import vo.BeerCate;

public interface BeerBrandDao {
  
  List<BeerCate> selectList(Map<String, Object>paramMap) throws Exception;
  

}
