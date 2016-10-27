package dao;

import vo.Beer;

public interface BeerDao {
//  List<Beer> selectList(Map<String,Object> paramMap) throws Exception;
//  List<Beer> selectListCate(Map<String,Object> paramMap) throws Exception;
  
  Beer selectOne(int no) throws Exception;
  Beer selectOneCate(int no) throws Exception;
  Beer selectOneBrand(int no) throws Exception;
  Beer selectSubCateOneScno(int no) throws Exception;
  Beer selectSubCateOneBrno(int no) throws Exception;
  Beer getBrnoDesc() throws Exception;
  
//  int insert(Beer beer) throws Exception;
//  int update(Beer beer) throws Exception;
//  int delete(int no) throws Exception;

}
