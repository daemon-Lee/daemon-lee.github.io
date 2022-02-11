---
permalink: /arxiv/csCL
title: "Computation and Language"
---

<ol class="breathe-horizontal" start="1"> 
   <div class="news-list">
      <div class="inner" style="width: 200px; height: 200px;">
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
         
            <g transform="rotate(0 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(30 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(60 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(90 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(120 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(150 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(180 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(210 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(240 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(270 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(300 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
               </rect>
            </g>
            <g transform="rotate(330 50 50)">
               <rect x="47" y="25" rx="3" ry="6" width="6" height="12" fill="#0a0a0a">
                  <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
               </rect>
            </g>

         </svg>
      </div>
   </div>
</ol>

<script type="text/javascript" language="javascript">
   async function arxiv_search(cat, max_results) {
      let fetchAwait = await fetch('https://export.arxiv.org/api/query?search_query=cat:'+cat+'&start=0&max_results='+max_results+'&sortBy=submittedDate&sortOrder=descending')
      let res = await fetchAwait.text()
      let result = res.substring(res.indexOf('<entry>')).split('<entry>')
      let data = []
      result.forEach((item,index) => {
         item = item.slice(0,item.indexOf("</entry>"))
         item = item.trim().split('</')
         let obj = {authors: [], categories: []}
         for(let i = 0; i<item.length; i++) {
               item[i] = item[i].slice(item[i].indexOf('<')+1).trim() 
               let propname = item[i].slice(0,item[i].indexOf('>'))
               if(propname === "author") {
                  obj.authors.push(item[i].slice(item[i].indexOf('<name>')+6))
               } else if(propname.includes('name')) {
                  
               } else if(propname.includes('comment')) {
                  obj.initialUpload = item[i].slice(propname.length+1)
                  obj.initialUpload = obj.initialUpload.slice(0,obj.initialUpload.indexOf(' init'))
               } else if(propname.includes('link')) {
                  obj.link = item[i].slice(item[i].indexOf("href=\"")+6)
                  obj.link = obj.link.slice(0,obj.link.indexOf('"'))
                  item[i] = item[i].split('category')
                  item[i].forEach(ele => {
                     if(ele.includes('term')) {
                           let cate = ele.slice(ele.indexOf('term="')+6)
                           cate = cate.slice(0,cate.indexOf('"'))
                           obj.categories.push(cate)
                     }
                  })
               } else {
                  obj[propname] = item[i].slice(propname.length+1)
               }
         }
         if(index > 0) data.push(obj)
         window.data = data
      })
      setTimeout(() => {
         let content = []
         window.data.forEach((news) => {
            content.push(`
               <li class="news-item">
                  [<a class="news-id" href="${news.link}">${news.id.split("/").at(-1)}</a>] <b>${news.title}</b>
                  <p class="authors"><b>Authors:</b> ${news.authors.join(", ")}</p>
                  <p class="abstract"><b>Abstract:</b> ${news.summary.slice(0,200)}...</p>
                  <p class="tags is-small"><b>tags:</b> ${news.categories.slice(1).join(', ')}</p>
                  <p class="submitted">
                     <b>Submitted:</b> ${news.published.slice(0, 10)}
                  </p>
               </li>
            `)
         })
         document.querySelector('.news-list').innerHTML = content.join("")
      }, 1000)
   }

   arxiv_search(cat="cs.CL", max_results=15)

</script>
