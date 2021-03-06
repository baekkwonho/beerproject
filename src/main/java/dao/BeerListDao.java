package dao;

import java.util.List;	
import java.util.Map;

import vo.Beer;

public interface BeerListDao {
  
  List<Beer> selectBrandList() throws Exception;
  List<Beer> selectSubCateListAll() throws Exception;
  List<Beer> selectCtryList() throws Exception;
  List<Beer> selectCompList() throws Exception;
  List<Beer> getBeerBrandNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerSubCateNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCtryNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> getBeerCompNo(Map<String,Object> paramMap) throws Exception;
  int insert(Beer beer) throws Exception;
  int brandInsert(String BRBRNM) throws Exception;
  int compInsert(String company) throws Exception;
  List<Beer> searchBrandNo(Map<String,Object> paramMap) throws Exception;
  List<Beer> searchSubCateNo(Map<String,Object> paramMap) throws Exception;
  
  List<Beer> getAleList() throws Exception;
  List<Beer> getLagerList() throws Exception;
  List<Beer> getEtcList() throws Exception;
  
  List<Beer> selectSubCateListOne(int no) throws Exception;
  List<Beer> selectCtryListOne(int no) throws Exception;
  
  List<Beer> selectBeerList() throws Exception;
  List<Beer> selectBeerRandomOne(Map<String,Object> paramMap) throws Exception;
  
  List<Beer> selectDistrictBrandName() throws Exception;
  List<Beer> selectDistrictSubCateName() throws Exception;
  List<Beer> selectDistrictCountryName() throws Exception;
  
  
  
//  int insert(Beer beer) throws Exception;
//  int update(Beer beer) throws Exception;
//  int delete(int no) throws Exception;

}
