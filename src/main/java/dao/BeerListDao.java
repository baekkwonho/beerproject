package dao;

import java.util.List;	
import java.util.Map;

import vo.Beer;

public interface BeerListDao {
  
  List<Beer> selectBrandList() throws Exception;
  List<Beer> selectCateList() throws Exception;
  List<Beer> selectCtryList() throws Exception;
  List<Beer> getBeerBrandNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCateNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCtryNo(Map<String,Object> paramMap) throws Exception;
  int insert(Beer beer) throws Exception;
  int brandInsert(String BRBRNM) throws Exception;
  
//  int insert(Beer beer) throws Exception;
//  int update(Beer beer) throws Exception;
//  int delete(int no) throws Exception;

}
