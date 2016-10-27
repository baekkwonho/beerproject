package vo;

import java.io.Serializable;

public class Beer implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected int scno;
  protected int brbrno;
  protected int ctryno;
  protected int cono;
  protected int mcno;
  protected String mcname;
  protected String scname;
  protected String brbrname;
  protected String describe;
  protected String country;
  protected String company;
  protected float alchol;
  protected String brphoto_path;
  protected String search;
  
  
  
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public int getScno() {
    return scno;
  }
  public void setScno(int scno) {
    this.scno = scno;
  }
  public int getBrbrno() {
    return brbrno;
  }
  public void setBrbrno(int brbrno) {
    this.brbrno = brbrno;
  }
  public int getCtryno() {
    return ctryno;
  }
  public void setCtryno(int ctryno) {
    this.ctryno = ctryno;
  }
  public int getCono() {
    return cono;
  }
  public void setCono(int cono) {
    this.cono = cono;
  }
  public int getMcno() {
    return mcno;
  }
  public void setMcno(int mcno) {
    this.mcno = mcno;
  }
  public String getMcname() {
    return mcname;
  }
  public void setMcname(String mcname) {
    this.mcname = mcname;
  }
  public String getScname() {
    return scname;
  }
  public void setScname(String scname) {
    this.scname = scname;
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
  public String getBrphoto_path() {
    return brphoto_path;
  }
  public void setBrphoto_path(String brphoto_path) {
    this.brphoto_path = brphoto_path;
  }
  public String getSearch() {
    return search;
  }
  public void setSearch(String search) {
    this.search = search;
  }
  
  
  
}
