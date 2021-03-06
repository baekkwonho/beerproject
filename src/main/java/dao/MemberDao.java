package dao;

import java.util.Map;

import vo.Member;

public interface MemberDao {
  
  Member selectOneByEmailAndPassword(Map<String,Object> paramMap);
  Member confirmEmail(Map<String,Object> paramMap);
  
  int insertDefaultMember(Map<String,Object> paramMap);
  int insertOptionMember(Map<String,Object> paramMap);
  
  
    
}
