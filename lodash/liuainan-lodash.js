var USERNAME = function(){

  function chunk(ary, size = 1) {
  	var result=[],j=0,k=0
  	while(j<ary.length){	
	  	var a=[]
	  	for(var i=0;i<size;i++){
	  		if(!ary[j]){
	  			break
	  		}
	  		a[i]=ary[j]
	  		j++
	  	}
	  	result[k]=a
	  	k++
	}
	return result
  }
  function compact(ary) {

  }

  return {
    chunk: chunk,
    
  }
}()