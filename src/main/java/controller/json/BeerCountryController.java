package controller.json;

import java.util.HashMap;
import java.util.Locale;

import dao.BeerCtryDao;

public class BeerCountryController {
  
  public static void main(String[] args) {
   BeerCtryDao beerCtryDao = null;
   Locale locale = null;
   String[] countries = Locale.getISOCountries();
   HashMap<String, Object> map = new HashMap<>();
   try {
     for (String country : countries) {
       locale = new Locale("ko", country);
       System.out.println(locale.getDisplayCountry());
       map.put(country,locale.getDisplayCountry());
     }
   } catch (Exception e) {}
   
    System.out.println(map.values());
    
    
    
//    System.out.println(countries.length);
//    for (int i = 0; i< countries.length; i++) {
//      String country = countries[i];
//      locale = new Locale("ko", country);
//      System.out.println(locale.getDisplayCountry());
//      String ctry = locale.getDisplayCountry();
//      System.out.println(ctry);
//      map.put("1"+country, ctry);
//    }
//    
//    System.out.println("=====");
//    
//    System.out.println(map.size());
//    for (int i = 0; i < map.size(); i++) {
//      System.out.println(map.get(i));
//    }
//    
  }
  
}
