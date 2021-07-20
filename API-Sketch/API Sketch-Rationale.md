# Designing for Data Informed User Experience

# API Sketch: Rationale | Nathan TSE | U3200943

## Aim

###### The aim of the project is to provide a practical understanding of the concepts discussed in modules 1 and 2.

## Task

###### Build a simple responsive web app that loads dynamic data through at least one web-based GLAM API and displays the content in an interesting way.

# Development Process

######  In the early stages of the API Sketch project, I researched what a GLAM API was. It was basically an API specifically for Galleries, Libraries, Archives and Museums. I initially wanted to implement two different GLAM API&#39;s (e.g. National Museum of Australia and Australian War Memorial) into my website to display various subjects. But since I ran out of time due to unforeseen circumstances, I chose only one, the Australian War Memorial, to challenged myself. The Australian War Memorial&#39;s API required the API Key to be sent via header, making this API setup more rigorous than a GET URL Request method. I wanted to design my website like Troves with a search bar to search for everything. But if the user didn&#39;t know what to search for, it could be a bad design. So, I adapted the website to use the user&#39;s location&#39;s IP address, which then shows its city location and display results. Common dates from the API were displayed on buttons based on the user&#39;s location.

# Design Decisions and Challenges

###  Framework

###### I designed my API website to be mobile-first using Googles framework, _Materialize (Version 0.100.2_). I choose this framework since it was recommended by many inspiration CSS framework sites, including athemes.com. But this framework is still new and has limited functionality compared to bootstraps 4. The documentation was handy, and it had basic conventions of a framework such as containers and rows. The beta version, much like bootstraps, had a broad range of colours to use as text and background. Though it had fewer functions, it made up with a sleek design.

### Geolocation

###### I chose to use geolocation as the site&#39;s initial setup and use IP location as a fallback. It seemed hard for the user to click agree on geolocation every time, so I switch it to the IP location. But if the IP location fails, I planned to use geolocation as a backup but didn&#39;t go through with it as I was running into the deadline.

### IP address

###### One design decision I made was to change from browser API location to IP address location. Even if the user declines the permissions, the site can still display data based on the users&#39; IP location. One setback was if there too many requests for the same users IP location. I got around this by having a fail response which made &quot;Canberra&quot; the default location if any errors were to happen. I somewhat wanted to use browser geolocation but ended not putting it back in as the fall back due to time restrictions.

### On Click After Appended

###### For some reason, once an element is appended into the body, it technically isn&#39;t part of the initial document, so I had to find a solution for selecting an element, which was to jQuery/select the &quot;Document&quot; or parent div then select the child div. The other way I found was to run a function that would make it appear in the initial document, such as onload.

### Displaying the right content based on different button clicks

###### Displaying the right content based on different button clicks was by far the most challenging part of the assignment, as well as filtering and displaying the correct content while clicking on a certain category. Since I had to retrieve the div&#39;s value, then make everything that isn&#39;t that value make it inactive, thus only displaying the div&#39;s value.

### Future Improvements
###### One thing you might notice is there is only element for each category button. So, if that category has more then one element it will only display the more current element (e.g. the first one). Thus, if I had more time to complete this project, I would figure out the nested for loop to display each item. The idea is loop through the category&#39;s then nest that loop to display each item in a specific to that category.