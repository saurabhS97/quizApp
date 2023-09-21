To operate the project, please follow these commands:

Install dependencies: npm install
Start the project: npm run start


The project comprises three primary components:

StartPage:

Displays the initial user interface.
Upon clicking the "Start" button, it redirects the user to the QuestionPage.
QuestionPage:

Requests data from the API to retrieve a list of questions along with their corresponding solutions.
Presents each question one by one to the user.
On selecting "Next," the user's answers, along with the question and the time taken, are sent to the backend.
Once all questions have been processed, the user is directed to the Result Page.
Result Page:

Initiates an API call to fetch the user's results.
Provides information on the number of correct and incorrect answers.
Computes the overall result and displays it to the user.
Offers the option for the user to retake the quiz.


Commands to run the docker

To build the docker image-
    docker image build -t quizzimage:latest .

To run the image
    docker run -dp 8000:3000 --name quizzimage quizzimage:latest


deployed netlify link
https://main--phenomenal-basbousa-5649e9.netlify.app/