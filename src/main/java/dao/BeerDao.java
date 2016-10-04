package dao;

import java.util.List;
import java.util.Map;

import vo.Beer;

public interface BeerDao {
  List<Beer> selectList(Map<String,Object> paramMap) throws Exception;
  Beer selectOne(int no) throws Exception;
//  int insert(Beer beer) throws Exception;
//  int update(Beer beer) throws Exception;
//  int delete(int no) throws Exception;

}
