package vo;

import java.io.Serializable;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class BeerNotice implements Serializable {
  private static final long serialVersionUID = 1L;
  static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
  
  protected int no;
  protected String title;
  protected String contents;
  protected String writer;
  protected Date createdDate; // 이제 java.sql.Date 타입으로 날짜 정보를 제대로 다뤄보자!
  protected int viewCount;
  protected transient String password; // 보안상 암호는 직렬화 대상에서 제외하는 것이 좋다.
  //protected String createdDate2; // 클라이언트가 사용할 문자열 형식(yyyy-MM-dd)의 날짜 
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public String getWriter() {
    return writer;
  }
  public void setWriter(String writer) {
    this.writer = writer;
  }
  public Date getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
  }
  public int getViewCount() {
    return viewCount;
  }
  public void setViewCount(int viewCount) {
    this.viewCount = viewCount;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  

  
}


