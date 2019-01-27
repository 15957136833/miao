var liuainan = function(){

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
	  	var result =[]
	  	for(var item of ary ){
	  		if(item){
	  			result.push(item)
	  		}
	  	}
	  	return result
	}
 	function concat(ary,...orgs) {
	  	function f (arry,ary){
	  		if(arry.every(it=>typeof it !=='object') ){
	  			ary.push(arry)
	  		}else{
	  			for (var item of arry){
	  				f(item,ary)
	  			}
	  		} 		
	  		return ary 
	  	}
	  	for(var org of orgs){
	  		if(typeof org !=='object'){
	  			ary.push(org)
	  		}else{
	  			f(org,ary)
	  		}
	  	}
  		
  		return ary 
  	}
  	function difference(ary,values) {
  		var result=[]
  		var map = {}
  		for (var item of values){
  			map[item]=true
  		}
  		for (var key of ary){
  			if(!map[key]){
  				result.push(key)
  			}
  		}
	  	return result
	}
	function after(n,func){
		var calledTimes=0
		return function(...args){
			calledTimes++
			if(calledTimes>=n){
			 return func(...args)
			}
		}
	}
	function unary(func){
		return function (...args){
			var first=args.slice(0,1)
			return func.call(this,...first)
		}
	}
	function ary(func ,n=func.length){
		return function(...args){
			var first=args.slice(0,n)
			return func(...first)
		}
	}
	function flip(func){
		return function (...args){
			return func(...args.reverse())
		}
	}
	function negate(predicate){
		return function(...args){
			return !predicate(...args)
		}
	}
	function spread(func){
		return function(array){
			return func.apply(this,arra y)
		}
	}
	function bind(){
	}
  return {
    chunk: chunk,
    compact:compact,
    concat:concat,
    difference:difference,
    after:after,
    unary:nuary,
    ary:ary,
    flip:flip,
    negate:negate,
    spread:spread
  }
}()