package vo;

import java.io.Serializable;

public class BeerCompany implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected String company;
  
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getCompany() {
    return company;
  }
  public void setCompany(String company) {
    this.company = company;
  }
  
}
