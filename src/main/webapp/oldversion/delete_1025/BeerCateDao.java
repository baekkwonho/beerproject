package dao;

import java.util.List;

import vo.BeerCate;

public interface BeerCateDao {
  
//  List<BeerCate> selectList(Map<String, Object>paramMap) throws Exception;
  
  List<BeerCate> selectList() throws Exception;

}
