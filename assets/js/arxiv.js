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