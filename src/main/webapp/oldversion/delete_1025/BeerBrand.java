package vo;

import java.io.Serializable;
import java.util.Date;

public class BeerBrand implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected String name;
  
  
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  
}
