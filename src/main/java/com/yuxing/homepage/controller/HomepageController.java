package com.yuxing.homepage.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomepageController {
	
//	@RequestMapping("introduce.do")
//	public String intriduce(){
//		return "views/intriduce.html";
//	}
//	
	@RequestMapping("contactus.do")
	public String contactus(){
		return "views/contactus.html";
	}
	
	@RequestMapping("solution.do")
	public String solution(){
		return "views/solution.html";
	}
	
	@RequestMapping("comprehensiveStrength.do")
	public String comprehensiveStrength(){
		return "views/comprehensiveStrength.html";
	}
	
	@RequestMapping("socialResponsibility.do")
	public String socialResponsibility(){
		return "views/socialResponsibility.html";
	}
	
	@RequestMapping("humanResource.do")
	public String humanResource(){
		return "views/humanResource.html";
	}
}
