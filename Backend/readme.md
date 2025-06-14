# Backend Routes Documentation

---

## User Routes

### Register User
- **URL**: `/user/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body Example**:
    ```json
    {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
- **Controller**: `userController.registerUser`

---

### Login User
- **URL**: `/user/login`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body Example**:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
- **Controller**: `userController.loginUser`

---

### Get User Profile
- **URL**: `/user/profile`
- **Method**: `GET`
- **Description**: Retrieves the profile of the logged-in user.
- **Headers**: `Authorization: Bearer <token>`
- **Controller**: `userController.getUserProfile`

---

### Logout User
- **URL**: `/user/logout`
- **Method**: `GET`
- **Description**: Logs out the logged-in user.
- **Headers**: `Authorization: Bearer <token>`
- **Controller**: `userController.logoutUser`

---

## Captain Routes

### Register Captain
- **URL**: `/captain/register`
- **Method**: `POST`
- **Description**: Registers a new captain.
- **Request Body Example**:
    ```json
    {
      "fullname": {
        "firstname": "Ajay",
        "lastname": "Kumar"
      },
      "email": "ajay.kumar@example.com",
      "password": "Abc1242",
      "vehicle": {
        "color": "blue",
        "plate": "Jh02eyc",
        "capacity": 3,
        "vehicleType": "car"
      }
    }
    ```
- **Controller**: `captainController.registerCaptain`

---

### Login Captain
- **URL**: `/captain/login`
- **Method**: `POST`
- **Description**: Logs in an existing captain.
- **Request Body Example**:
    ```json
    {
      "email": "ajay.kumar@example.com",
      "password": "Abc1242"
    }
    ```
- **Controller**: `captainController.loginCaptain`

---

### Get Captain Profile
- **URL**: `/captain/profile`
- **Method**: `GET`
- **Description**: Retrieves the profile of the logged-in captain.
- **Headers**: `Authorization: Bearer <token>`
- **Controller**: `captainController.getCaptainProfile`

---

### Logout Captain
- **URL**: `/captain/logout`
- **Method**: `GET`
- **Description**: Logs out the logged-in captain.
- **Headers**: `Authorization: Bearer <token>`
- **Controller**: `captainController.logoutCaptain`

---

## Ride Routes

### Create Ride
- **URL**: `/rides/create`
- **Method**: `POST`
- **Description**: Create a new ride request.
- **Headers**: `Authorization: Bearer <token>`
- **Request Body Example**:
    ```json
    {
      "pickup": "Indore",
      "destination": "Bhopal",
      "vehicleType": "car"
    }
    ```
- **Controller**: `rideController.createRide`

---

## Maps Routes

### Get Coordinates from Address
- **URL**: `/maps/get-coordinates?address=Indore`
- **Method**: `GET`
- **Description**: Get latitude and longitude for a given address.
- **Headers**: `Authorization: Bearer <token>`
- **Example**:
    ```
    GET /maps/get-coordinates?address=Indore
    ```

---

### Get Distance and Time
- **URL**: `/maps/get-distance-time?origin=Indore&destination=Bhopal`
- **Method**: `GET`
- **Description**: Get distance and estimated time between two locations.
- **Example**:
    ```
    GET /maps/get-distance-time?origin=Indore&destination=Bhopal
    ```

---

### Get Location Suggestions (Autocomplete)
- **URL**: `/maps/get-suggestions?input=Ind`
- **Method**: `GET`
- **Description**: Get location suggestions for autocomplete.
- **Headers**: `Authorization: Bearer <token>`
- **Example**:
    ```
    GET /maps/get-suggestions?input=Ind
    ```

---

## Notes

- All protected routes require a valid JWT token in the `Authorization` header as `Bearer <token>`.
- Validation errors will be returned as an array in the response.
- All responses are in JSON format.
