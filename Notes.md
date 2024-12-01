- Improving responses on create commands to be something other than "Bad Request"
- Probably not going to have time to do unit tests. Spending time with family for the holidays
- Add checking to CreateAstronautDutyPreProcessor, wasn't checking the person id when looking for previous duty. 
- Add CreatePersonPreProcessor to the request preprocessors. It wasn't hooked up before
- update how error responses are handled so that we can properly map exception types to Http status codes

- It's been a hot minute since I did UI stuff with typescript so I'm getting back into the groove of it and might be a bit messy

- I feel like the solution to "Cors is being weird gets changed every time I run into it"
- My angular ng serve won't actually rebuild when I change stuff.

- Giving up on routing after trying to spend an hour getting it to work. It's distracted me from making actual improvements






- Improvements to make
  - UI
    - Numerous, make routing work, add the ability to add new info
    - Initial UI thoughts were: Landing page that had a list of people at /people
      - Each person would have a button/link that took you to /people/:id where the id was their id.
        - This would mean we only have to load the names and ids initially (see improvements to the api) to reduce loading times. In the background we could potentially pre-load the details, but that's getting further into completely rewriting the api to be correct.
        - at /people/:id, we would load the Astronaut details (or lack thereof), and display each astronaut duty in a table.
        - There also would have been fields for adding new astronaut duties to the person on this page, which would have used the astronaut duty POST endpoint 
  - API
    - Cors. This feels like it is never the same for getting localhost stuff to run, so I just added                 ```Response.Headers.Append("Access-Control-Allow-Origin", "*");``` to every api endpoint and called it a day. 
    - Excluding items from responses
      - This one is more of a vibes thing from me. I like the idea of being able to call an api while excluding items in the response. This is probably me trying to be client agnostic when programming, instead of just making a different endpoint that only returns the name and id of every person (as an example).
    - More exceptions. Trying to find a person who isn't there should return a 404 - Not found exception.
      - This would have taken a little more time than I had to rework the response creator. 
