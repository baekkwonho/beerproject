package vo;

import java.io.Serializable;

public class BeerCountry implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected String country;
  
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getCountry() {
    return country;
  }
  public void setCountry(String country) {
    this.country = country;
  }
  
}
