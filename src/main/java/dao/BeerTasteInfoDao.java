package dao;

import java.util.List;
import java.util.Map;

import vo.BeerTasteInfo;

public interface BeerTasteInfoDao {
  List<BeerTasteInfo> selectList(int no) throws Exception;
 // BeerTasteInfo selectOne(int no) throws Exception;
  
//  int insert(Beer beer) throws Exception;
//  int update(Beer beer) throws Exception;
//  int delete(int no) throws Exception;

}
