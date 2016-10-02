package vo;

import java.io.Serializable;
import java.util.Date;

public class Member implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected String email;
  protected String password;
  protected String nickname;
  protected Date birth;
  protected boolean gender;
  protected String drink;
  protected String address;
  protected int level;
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getNickname() {
    return nickname;
  }
  public void setNickname(String nickname) {
    this.nickname = nickname;
  }
  public Date getBirth() {
    return birth;
  }
  public void setBirth(Date birth) {
    this.birth = birth;
  }
  public boolean isGender() {
    return gender;
  }
  public void setGender(boolean gender) {
    this.gender = gender;
  }
  public String getDrink() {
    return drink;
  }
  public void setDrink(String drink) {
    this.drink = drink;
  }
  public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public int getLevel() {
    return level;
  }
  public void setLevel(int level) {
    this.level = level;
  }
  
  
  
}
