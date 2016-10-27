package dao;

import java.util.List;

import vo.BeerPhoto;

public interface BeerPhotoDao {
  
  int insert(BeerPhoto beerPhoto) throws Exception;
  List<BeerPhoto> selectOnePhoto(int no) throws Exception;

}
