---
permalink: /about/
title: "About"
last_modified_at: 2022-02-09T22:52:27+07:00
toc: true
---

<div markdown="1">
  Mình tên đầy đủ là `Lê Đình Duy`, năm nay <span id="age"></span> tuổi, cao 1m88, nặng 67kg.
</div>

Và ... các bạn chỉ cần biết đến mình như vậy thôi :3

<script>  
    var dob = new Date("07/19/1999");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.getElementById("age").innerHTML = age;

</script>

