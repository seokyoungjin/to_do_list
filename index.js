function keyCodeCheck () {
	// console.log(window.event)
  
	if(window.event.keyCode === 13 && todoInput.value !== ''){
        const todoList = document.querySelector('#todoList');
		const newLi = document.createElement('li'); // li 생성
      	const newBtn = document.createElement('button'); // button 생성
		const newSpan = document.createElement('span'); // span 생성
		const todoInput = document.querySelector('#todoInput');
      
      	newLi.appendChild(newBtn); // li안에 button 담기
		newLi.appendChild(newSpan); // li안에 span 담기
		// console.log(newLi)
      
		newSpan.textContent = todoInput.value; // span 안에 value값 담기
      
      	todoList.appendChild(newLi);
		// console.log(todoList)
      
      	todoInput.value = ''; // value 값에 빈 문자열 담기
    }
}