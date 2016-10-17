package controller.json;

import java.util.Locale;

public class BeerCountryController {
  
  public static void main(String[] args) {
    Locale locale = null;
    String[] countries = Locale.getISOCountries();
    for (String country : countries) {
      locale = new Locale("ko", country);
      System.out.println(locale.getDisplayCountry());
    }
  }
  
}
