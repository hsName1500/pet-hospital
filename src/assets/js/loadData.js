// 用法:get  url=""
// 用法:post url='url~params'




let loadData =  function(url,callback){
    // 加载等待动画插入位置
    // **************

// *****************************************************
      let urlcheck=url.indexOf('~')
      let urlcheck1=url.split('~')
    if(urlcheck==-1){
      this.axios.get(url).then(res=>{
        let data = res
        callback(data)
      })
    }else{
      let params = urlcheck1.pop()
      let url1 = urlcheck1.pop()
      this.axios.post(url1,params).then(res=>{
        let data = res
        callback(data) 
      })
    }
//******************************************************* 
  }
module.exports=loadData

