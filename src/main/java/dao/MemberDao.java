package dao;

import java.util.Map;

import vo.Member;

public interface MemberDao {
  
  Member selectOneByEmailAndPassword(Map<String,Object> paramMap);
    
}
