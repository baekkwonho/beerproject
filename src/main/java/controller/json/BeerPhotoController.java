package controller.json;


import java.io.File;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import vo.JsonResult;

@Controller
@RequestMapping("/beerphoto/")
public class BeerPhotoController {
  
  @Autowired ServletContext sc;
  
  @RequestMapping(path="add")
  public void list(MultipartFile file, Model model) throws Exception {
    
    System.out.println(file.getName());
    
    String newFilename = null;
    if(!file.isEmpty()) {
      newFilename = this.getNewFilename(file.getOriginalFilename());
    
      try {
        file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
        model.addAttribute("file",newFilename);
     //   return JsonResult.success();
      }catch (Exception e) {
        e.printStackTrace();
       // return JsonResult.fail(e.getMessage());
      }
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

  
