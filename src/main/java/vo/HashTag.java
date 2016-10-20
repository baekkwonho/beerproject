package vo;

import java.io.Serializable;

public class HashTag implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int tagNo;
  protected int brNo;
  protected int mNo;
  protected String tagContent;
  protected int tagCount;
  
  
  public int getTagNo() {
    return tagNo;
  }
  public void setTagNo(int tagNo) {
    this.tagNo = tagNo;
  }
  public int getBrNo() {
    return brNo;
  }
  public void setBrNo(int brNo) {
    this.brNo = brNo;
  }
  public int getmNo() {
    return mNo;
  }
  public void setmNo(int mNo) {
    this.mNo = mNo;
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
