package vo;

import java.io.Serializable;

public class BeerPhoto implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected int brno;
  protected String brphoto_path;
  
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getBrno() {
    return brno;
  }
  public void setBrno(int brno) {
    this.brno = brno;
  }
  public String getBrphoto_path() {
    return brphoto_path;
  }
  public void setBrphoto_path(String brphoto_path) {
    this.brphoto_path = brphoto_path;
  }
  
  

}
