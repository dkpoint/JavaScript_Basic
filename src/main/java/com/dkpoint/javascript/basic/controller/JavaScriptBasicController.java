package com.dkpoint.javascript.basic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/basic/*")
public class JavaScriptBasicController {

	// http://localhost:8181/javascript/basic/index_page.do
	@RequestMapping("/index_page.do")
	public String indexPage() {
		System.out.println("index_page");
		
		return "basic/index_page";
	}
	
	// http://localhost:8181/javascript/basic/clock_page.do
	@RequestMapping("/clock_page.do")
	public String clockPage() {
		System.out.println("clock_page");
		
		return "basic/clock_page";
		
	}
	
}



