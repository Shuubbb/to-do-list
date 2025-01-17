# to-do-list

project 02 - 16/01/2025

to-do-list

create index.html, style.css
In index.html, we have title tag written " To-Do List App ". then link css file to html.
lets move on next part, body tag and we are creating a div class named container.
CSS for class named container should be width is 100%, min-height is 100vh, background is linear-gradient(135deg, #153677, #4e085f), padding is 10 px.

now you can see gradient look on screen.

within container div, we are adding again div class named <todo-app> and in it we are adding title in h2 tag and in that h2 tag, we are writting <To-Do List> and also adding image icon by img tag with src is icon.png.
Now, we need css for todo-app and for it width is 100%, max-width is 540px, background is #fff, margin is 100px auto 20px,padding 40px 30px 70px, border-radius is 10px.

now need css for h2 tag where color is #002765, display is flex (bcze, we need to align icon and text),align-item is 20px, margin-bottom is 20px.

then css for img tag where width is 30px, margin-left is 10px.

creating div class named as row. In this one, there will be input tag with type attribute as text and id named input-box and placeholder <add your text> then button tag written <Add> in it.
Now css for row which display is flex, align-items is center, justify-content is space-between and we are changing background here is #edeef0, border-radius is 30px, padding-left is 20px, margin-bottom is 25px.

now, we are adding css for input where flex is 1, border none, outline none, background is transparent, padding is 10px, font-weight is 14px.

now, css for button tag whre border is none, outline none, padding is 16px 50px, bbackground is #ff5945, and for text color we are using color is #fff, font-size is 16px, cursor is pointer, border-radius is 40px.

now after creating input & button, we need list of task for that creating ul tag id named as <list-container>, in this we are adding list item using li tag. for now write 'Task 1' in it and make 3 records of li tag with their task name written in it. Now CSS for this li tag where list-style is none, font-size is 17px, padding is 12px 8 px 12 px 50px, user-select is none, cursor is pointer.
and we need add one circle before the list so using property before that is on selecting again that list <li>.
ul li::before{}, in this we are adding content is empty --> '';position as absolute, height & width is 28px, border-radius is 50%, background-image is url(<file path--unchecked.png>), background-size is cover, background-position is center, top 12px, left 12 px. and in this we have added position as absolute. and add position as relative for ul li.

now, give class name to li tag that is 'checked', so need CSS for it where color is #555, text-decoration is line-through and now when text is underlined by above property need checkbox to be clicked. So, again when ul li.checked::before change background-image is url(<checked.png>).

now those list is visible in UI so, commenting li tags so it won't be visible. now we are focusing on JS part.


Script.js 
now we have to import the input and button.so, const inputBox is equal to getElementById with #id name. then one more id that is 'list-container' with const listContainer. After this we need click function on button.So, declare attribute onClick is "addTask()". 
Now, define this function. function addTask(){}.

we are taking if else statment in this function. if inputBox.value is equal to empty <''> then alert("") must be popped up as "You must write something!". In else statment declare let li is equal to document.createElement("li"); so in that creating <li> tag. and we need to add text also which is entered by input. So, li.innerHTML is equal to inputBox.value. Now, we need to display this li and shuld be displayed in id="list-container". For that we have already declared it, now just append the result. it is coded like listContainer.appendChild(li). Now it is adding whatever entered in input field. but we need to clear input field after clicking button. So, after else condition inputBox.value="".

now in else statment adding a span tag for showing cross x, let span is equal to create element "span". then in innerHTML of span is "\u00d7"(cross code). now, we need to display this cross. so need to append it in li tag.
Now, we need css for this cross. selct span in css then position is absolute,right is 0, top 5px, width 40px, height is 40px, font-size is 22px, color is #555, line-height is 40px, text-align is center. next we have to add hover effect so again select it in css use 'name:hover{}' for this background is #edeef0. For span, use border-radius 50% so it looks like circle when cursor is point on it.

Now, we need to add checked, unchecked and delete if clicked on cross icon.

now, adding JS for click function on list. so whenever we click on task in listContainer(which stores all tasks). We adding addEventListener for that container. for that pass 'e' as parameter in function in arrow function after that use if condition, here we have to check where we clicked in container. So, e.target.tagName is equal to "LI" then it should add "checked" className by using toggle method.

n JavaScript, toggling an element class refers to the process of dynamically adding or removing a CSS class from an HTML element.

now, if we clicked on span(cross), then it will delete the parent element so again in else if condition get the target element byv e.taget then .parentElement and use .remove() method (parent element is li element) means li tag will be removed.

Also, click is failed so adding another parameter after this function that is , false.


Now, we need to create a function, for if page is refreshed our list would not be refreshed.

creating a function named saveData() and in that using localStorage.setItem("data",listContainer.innerHTML) so, whatever data in listContainer is store in "data". Now paste this function in addTask at the end of else condition and we need to save data when checked & unchecked and removed so paste in eventListner also.
Now we need to display data, whenever page is refreshed, now gain new function named showTask()
in that function to pasting any old data in listContainer we are using listContainer.innerHTML equals to localstorage.getItem("data") for this use create function showTask()

so it is calling data. and call this function at the last.
