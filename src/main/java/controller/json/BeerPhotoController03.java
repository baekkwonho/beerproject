package controller.json;


import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import vo.JsonResult;

@Controller
@RequestMapping("/beerphoto03/")
public class BeerPhotoController03 {
  
  @Autowired ServletContext sc;
  
  @RequestMapping(path="load03")
  public Object load(MultipartFile file) throws IOException {
    //MultipartHttpServletRequest req
    
    try {
      HashMap<String, Object> map = new HashMap<>();
      map.put("originFilename", file.getOriginalFilename());
      return map;
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
    }
    
  }
  
  @RequestMapping(path="add03")
  public Object list(MultipartFile file) throws IOException {
    //MultipartHttpServletRequest req
    
    try {
      System.out.println("method start");
      System.out.println(file);
      
      System.out.println(file.getName());
      System.out.println(file.getSize());
      System.out.println(file.getOriginalFilename());
      
      String newFilename = null;
      if(!file.isEmpty()) {
        newFilename = this.getNewFilename(file.getOriginalFilename());
      }
      
      file.transferTo(new File(sc.getRealPath("/upload"+"/" + newFilename)));
      System.out.println(file.getName());
      System.out.println(file.getOriginalFilename());
      HashMap<String, Object> map = new HashMap<>();
      map.put("filename", newFilename);
      map.put("originFilename", file.getOriginalFilename());
      return map;
    } catch (Exception e) {
      e.printStackTrace();
      return JsonResult.fail(e.getMessage());
    }
    
  }
  
  int count = 0;
  private String getNewFilename(String originFilename) {
    if (count > 100) {
      count = 0;
    }
    return System.currentTimeMillis() + "_" + (++count) + extractFileExt(originFilename);
  }
  
  private String extractFileExt(String filename) {
    return filename.substring(filename.lastIndexOf("."));
  }
  
}
    
    
//    System.out.println(file.getName());
//  
    
/*    
    String newFilename = null;
    if(!file.isEmpty()) {
      newFilename = this.getNewFilename(file.getOriginalFilename());
    }
    
      try {
       //file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
       return JsonResult.success(file);
     }catch (Exception e) {
        e.printStackTrace();
        return JsonResult.fail(e.getMessage());
      }
  }

  
  
  int count = 0;
  private String getNewFilename(String originFilename) {
    if (count > 100) {
      count = 0;
    }
    return System.currentTimeMillis() + "_" + (++count) + extractFileExt(originFilename);
  }
  
  private String extractFileExt(String filename) {
    return filename.substring(filename.lastIndexOf("."));
  }

}
*/
  
