package vo;

import java.io.Serializable;
import java.util.Date;

public class Beer implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected int cateno;
  protected int brbrno;
  protected String catename;
  protected String brbrname;
  protected String describe;
  protected String country;
  protected String company;
  protected float alchol;
  protected int volume;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getCateno() {
    return cateno;
  }
  public void setCateno(int cateno) {
    this.cateno = cateno;
  }
  public int getBrbrno() {
    return brbrno;
  }
  public void setBrbrno(int brbrno) {
    this.brbrno = brbrno;
  }
  public String getCatename() {
    return catename;
  }
  public void setCatename(String catename) {
    this.catename = catename;
  }
  public String getBrbrname() {
    return brbrname;
  }
  public void setBrbrname(String brbrname) {
    this.brbrname = brbrname;
  }
  public String getDescribe() {
    return describe;
  }
  public void setDescribe(String describe) {
    this.describe = describe;
  }
  public String getCountry() {
    return country;
  }
  public void setCountry(String country) {
    this.country = country;
  }
  public String getCompany() {
    return company;
  }
  public void setCompany(String company) {
    this.company = company;
  }
  public float getAlchol() {
    return alchol;
  }
  public void setAlchol(float alchol) {
    this.alchol = alchol;
  }
  public int getVolume() {
    return volume;
  }
  public void setVolume(int volume) {
    this.volume = volume;
  }
  
  
  
}
