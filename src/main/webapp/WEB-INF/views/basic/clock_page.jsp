<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Clock_page</title>
<!-- CSS File -->
<link
	href="${pageContext.request.contextPath}/resources/css/basic/clock_page.css"
	rel="stylesheet" />
</head>
<body>
	<div class="js_clock">
		<h1>00:00:00</h1>
	</div>
	<form class="js-form">
		<input type="text" placeholder="이름을 입력해주세요.">
	</form>
	<!-- JS File -->
	<script
		src="${pageContext.request.contextPath}/resources/js/basic/clock_page.js"></script>
	<script
		src="${pageContext.request.contextPath}/resources/js/basic/gretting_page.js"></script>
</body>
</html>