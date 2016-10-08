package vo;

import java.io.Serializable;

public class BeerTasteInfo implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int brno;
  protected int mno;
  protected float score;
  protected int bitter;
  protected int sour;
  protected int sweet;
  protected int sparkle;
  protected int body;
  protected int aroma;
  
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
  public float getScore() {
    return score;
  }
  public void setScore(float score) {
    this.score = score;
  }
  public int getBitter() {
    return bitter;
  }
  public void setBitter(int bitter) {
    this.bitter = bitter;
  }
  public int getSour() {
    return sour;
  }
  public void setSour(int sour) {
    this.sour = sour;
  }
  public int getSweet() {
    return sweet;
  }
  public void setSweet(int sweet) {
    this.sweet = sweet;
  }
  public int getSparkle() {
    return sparkle;
  }
  public void setSparkle(int sparkle) {
    this.sparkle = sparkle;
  }
  public int getBody() {
    return body;
  }
  public void setBody(int body) {
    this.body = body;
  }
  public int getAroma() {
    return aroma;
  }
  public void setAroma(int aroma) {
    this.aroma = aroma;
  }
  
  
  
  
}
