package dao;

import java.util.List;
import java.util.Map;

import vo.BeerHashTag;

public interface BeerHashTagDao {
  
  int insert(BeerHashTag beerHashTag) throws Exception;
  List<BeerHashTag> selectHashTagBrno(Map<String,Object> paramMap) throws Exception;
  int updateHashTagCount(BeerHashTag beerHashTag) throws Exception;

}
