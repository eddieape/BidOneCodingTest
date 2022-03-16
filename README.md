# BidOneCodingTest

This project is only a coding test for BidOne, it shows a simple form for a user to enter information. When the form is submitted, a Web API is called to post form data to the backend, the posted data saved in a file in json form.

## Setup Environment

- Step1: Install Visual Studio 2019
- Step2: Install Node.js

## Complie and Run the project

- Download the whole project
- Run Visual Studio 2019
- Open the project file named "BidOneCodingTest.sln" in Visual Studio 2019
- Build and run the project in Visual Studio 2019

## API Documentaion

- POST /api/profile

    Save firstname and lastname in a backend file("/profiles/profiledata.txt") in json format. For example:

    ```
    Request body:
    --------------------------------
    {
        "FirstName": "ping",
        "LastName":"gao"
    }
    ```

    ```
    Response
    --------------------------------
    {
        "status": 0,
        "error": "{\"FirstName\":\"Ping\",\"LastName\":\"Gao\"}"
    }
    ```

    If the return value of status is 0, this mean the operation is successful. Otherwise, if its value is -1, it means that there is an error occurred. For example:

    ```
    Request body:
    --------------------------------
    {
        "FirstName": "ping",
        "LastName":"gao"
    }
    ```

    ```
    Response
    --------------------------------
    {
        "status": -1,
        "error": "Show error message!!!"
    }
    ```
