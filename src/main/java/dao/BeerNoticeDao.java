package dao;

import java.util.List;
import java.util.Map;

import vo.BeerNotice;


public interface BeerNoticeDao {
  List<BeerNotice> selectList(Map<String,Object> paramMap) throws Exception;
  BeerNotice selectOne(int no) throws Exception;
  BeerNotice selectOneByPassword(Map<String,Object> paramMap) throws Exception;
  int insert(BeerNotice beerNotice) throws Exception;
  int update(BeerNotice beerNotice) throws Exception;
  int delete(int no) throws Exception;
}
