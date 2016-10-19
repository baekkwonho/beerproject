package dao;

import java.util.List;	
import java.util.Map;

import vo.Beer;

public interface BeerListDao {
  
  List<Beer> selectBrandList() throws Exception;
  List<Beer> selectCateList() throws Exception;
  List<Beer> selectCtryList() throws Exception;
  List<Beer> selectCompList() throws Exception;
  List<Beer> getBeerBrandNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCateNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCtryNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCompNo(Map<String,Object> paramMap) throws Exception;
  int insert(Beer beer) throws Exception;
  int brandInsert(String BRBRNM) throws Exception;
  int compInsert(String company) throws Exception;
  List<Beer> searchBrandNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> searchCateNo(Map<String,Object> paramMap) throws Exception;
  
//  int insert(Beer beer) throws Exception;
//  int update(Beer beer) throws Exception;
//  int delete(int no) throws Exception;

}
