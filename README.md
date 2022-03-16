# BidOneCodingTest
This project is only a coding test for BidOne. I will make a simple form, then call a web API to post the data to the backend.

## Development Environment

- Step1: Install Visual Studio 2019
- Step2: Install Node.js

## Complie and Run the project

- Download the whole project;
- Run Visual Studio 2019
- Open the project file named "BidOneCodingTest.sln" in Visual Studio 2019
- Build and run the project in Visual Studio 2019;

## API Documentaion

  - POST /api/profile

    Save firstname and lastname in a backend file("/profiles/profiledata.txt") in json format. 

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
        "error": ""
    }
    ```

    If the return value of status is 0, this mean the operation is successful Otherwise, if its value is -1, it means that there is an error occurred. For example:

    ```
    Request body:
    --------------------------------
    {
        "AdTimeLen": 4,
        "MediaType":"Radio",
        "Stations":[1, 2]
    }
    ```

    ```
    Response
    --------------------------------
    {
    "totalFee": 0,
    "status": -1,
    "error": "The value of AdTimeLen must be between 5s and 300s."
    }
    ```
