package com.dkpoint.javascript.basic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/basic/*")
public class JavaScriptBasicController {

	// http://localhost:8181/javascript/basic/basic01_page.do
	@RequestMapping("/index_page.do")
	public String indexPage() {
		System.out.println("index_page");
		
		return "basic/index_page";
	}
	
	// http://localhost:8181/javascript/basic/basic01_page.do
	@RequestMapping("/basic01_page.do")
	public String ajax01Page() {
		System.out.println("basic01_page");
		
		return "basic/basic01_page";
	}
	
}



