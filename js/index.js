let cells = 16;

const container = document.querySelector("#grid-container")


function startGrid (){
//Set grid columns
	let auto = "auto"
	for (let i = 0; i < cells-1; i++){
		auto += " " + "auto";
	}
	container.style.cssText = 'grid-template-columns: ' + auto;


	//Create Grid
	let padding = 400/cells;
	for (i = 0; i < cells; i++){
	  for (let j = 0; j< cells; j++){
	    let div = document.createElement("div");
	    	div.setAttribute("class", "cell")
	    	div.style.padding = padding + "px";
	    	
	      	container.appendChild(div);
	  
	    
	      }  
	    }
	    let div = document.querySelectorAll('.cell');
	    
	    div.forEach((square) =>{
	    	square.addEventListener("mouseover", ()=>{
	    		square.classList.add("black");
	    })
})
}

document.addEventListener("DOMContentLoaded", startGrid());






 let reset = document.querySelector("#reset");
 	reset.onclick = ()=> {
	 	cells = prompt("Choose the size of the grid!");
	
	 let div = document.querySelectorAll('.cell');
		div.forEach((square) =>{
	    	square.remove();
	    container.removeAttribute('style');		
	    })
	 	startGrid();
 	}


 