package com.yuxing.homepage.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomepageController {
	
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
	
}
