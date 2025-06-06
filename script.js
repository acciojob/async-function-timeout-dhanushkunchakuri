//your JS code here. If required.
function display(text,delay){

	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(text);
		},delay)
	})
}
 document.getElementById("btn").addEventListener('click',async ()=>{
	try{
		let text=document.getElementById("text").value;
		let delay=parseInt(document.getElementById("delay").value);
		let	data=await display(text,delay);
		document.getElementById("output").innerText=data;
	}
	 catch(e){
		 console.log("error:",e);
	 }
});
	
	