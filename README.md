<div align="center">
  <img width="100px" height="100px" src="https://raw.githubusercontent.com/kunalh99/ICD-Expert/main/public/medicalfavicon.png?token=AIW2C5W2TT6GLQ6RUSSDZALA3IKTI" />
  <h1>ICD Expert</h1>
  <h3>Sentiment & Opinion Mining Natural Language API Hackathon</h3>
</div>

## Inspiration
Converting the doctor's description of a patient into a standardized form by hospitals is a very crucial step of the medical insurance claim process, popularly known as medical coding. Currently, this step is manual, slow, and error-prone. ICD-10 is the de facto standard for medical coding. Automating ICD-10 coding helps increase the efficiency and throughput of the medical insurance claim process, ensuring that patients are not overcharged due to incorrect medical coding. It also helps boost the healthcare industry by ensuring their revenue flow is not affected by the delayed filing of medical claims.

## What it does
ICD-Expert automates the medical coding process using the powerful expert-ai NL API. This would ensure that medical claims are filed on time and correctly. When the user enters the medical report, it is sent to the API for the recognition of relevant diseases. The ailments are identified by ICD-Expert and generate the corresponding ICD-10 codes instantly. With ICD-Expert, more patient claims can be handled without human error in the blink of an eye. 

Once the medical report is entered into the web app and submitted, ICD-Expert makes an API call to the expert NL API's "relevants" endpoint. This helps us look for the diseases within the description. Using the "knowledge" JSON in combination with the "MainSyncons" returned from the API, we get the relevant diseases from the patient description. These are then processed into their respective ICD codes using a "National Library of Medicine (NLM)" API. Finally, the healthcare specialist has the option to export this data as a pdf file.

![3](https://user-images.githubusercontent.com/36544886/122809479-3560ac00-d2df-11eb-98d2-be00a0c6fac4.png)

## How we built it
ICD-Expert was built using a combination of different technologies. For our front end, we used react along with HTML and CSS. Firebase was used to handle all real-time updates on the backend, and to store patient descriptions. Most importantly the Expert-ai NL API was crucial to help us extract meaningful syncons from our data.

![6](https://user-images.githubusercontent.com/36544886/122809497-3b568d00-d2df-11eb-9f87-d5cef82d67ba.png)

## Challenges we ran into
For this hackathon, we decided to work on a new tech stack. It certainly took some time to get to grips with react and firebase, and having to go through all the documentation.

## Accomplishments that we're proud of
We are proud of taking a step towards making a technology that should prove effective, especially in a field where healthcare workers are constantly over-worked 😊

## What we learned
We learned about many fundamental concepts in NLP and how profound an impact it has on fields such as healthcare.
