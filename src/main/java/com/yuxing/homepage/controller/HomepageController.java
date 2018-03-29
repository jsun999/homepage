package com.yuxing.homepage.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomepageController {
	
	@RequestMapping("contactus.do")
	public String contactus(){
		return "views/contactus.html";
	}
}
