package vo;

import java.io.Serializable;

public class BeerHashTag implements Serializable {
  private static final long serialVersionUID = 1L;

  protected int tagno;
  protected int brno;
  protected int mno;
  protected String tagContent;
  protected int tagCount;
  
  
  public int getTagno() {
    return tagno;
  }
  public void setTagno(int tagno) {
    this.tagno = tagno;
  }
  public int getBrno() {
    return brno;
  }
  public void setBrno(int brno) {
    this.brno = brno;
  }
  public int getMno() {
    return mno;
  }
  public void setMno(int mno) {
    this.mno = mno;
  }
  public String getTagContent() {
    return tagContent;
  }
  public void setTagContent(String tagContent) {
    this.tagContent = tagContent;
  }
  public int getTagCount() {
    return tagCount;
  }
  public void setTagCount(int tagCount) {
    this.tagCount = tagCount;
  }
  
  
}
