# Backend Routes Documentation

## User Routes

### Register User
- **URL**: `/user/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
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
- **Validations**:
    - `email`: Must be a valid email.
    - `fullname.firstname`: Must be at least 3 characters long.
    - `password`: Must be at least 6 characters long.
- **Controller Method**: `userController.registerUser`

### Login User
- **URL**: `/user/login`
- **Method**: `POST`
- **Description**: Logs in an existing user.
- **Request Body**:
    ```json
    {
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```
- **Validations**:
    - `email`: Must be a valid email.
    - `password`: Must be at least 6 characters long.
- **Controller Method**: `userController.loginUser`

### Get User Profile
- **URL**: `/user/profile`
- **Method**: `GET`
- **Description**: Retrieves the profile of the logged-in user.
- **Middleware**: `authMiddleware.authUser`
- **Controller Method**: `userController.getUserProfile`

### Logout User
- **URL**: `/user/logout`
- **Method**: `GET`
- **Description**: Logs out the logged-in user.
- **Middleware**: `authMiddleware.authUser`
- **Controller Method**: `userController.logoutUser`

## Captain Routes

### Register Captain
- **URL**: `/captain/register`
- **Method**: `POST`
- **Description**: Registers a new captain.
- **Request Body**:
    ```json
    {
        "fullname": {
            "firstname": "Ajay",
            "lastname": "Kumar"
        },
        "email": "Goutam12@gmail.com",
        "password": "Abc1242",
        "vehicle": {
            "color": "blue",
            "plate": "Jh02eyc",
            "capacity": 3,
            "vehicleType": "car"
        }
    }
    ```
- **Validations**:
    - `email`: Must be a valid email.
    - `fullname.firstname`: Must be at least 3 characters long.
    - `password`: Must be at least 6 characters long.
    - `vehicle.color`: Must be at least 3 characters long.
    - `vehicle.plate`: Must be at least 4 characters long.
    - `vehicle.capacity`: Must be at least 1.
    - `vehicle.vehicleType`: Must be one of `['car', 'motorcycle', 'auto']`.
- **Controller Method**: `captainController.registerCaptain`

### Login Captain
- **URL**: `/captain/login`
- **Method**: `POST`
- **Description**: Logs in an existing captain.
- **Request Body**:
    ```json
    {
        "email": "Goutam12@gmail.com",
        "password": "Abc1242"
    }
    ```
- **Validations**:
    - `email`: Must be a valid email.
    - `password`: Must be at least 6 characters long.
- **Controller Method**: `captainController.loginCaptain`

### Get Captain Profile
- **URL**: `/captain/profile`
- **Method**: `GET`
- **Description**: Retrieves the profile of the logged-in captain.
- **Middleware**: `authMiddleware.authCaptain`
- **Controller Method**: `captainController.getCaptainProfile`

### Logout Captain
- **URL**: `/captain/logout`
- **Method**: `GET`
- **Description**: Logs out the logged-in captain.
- **Middleware**: `authMiddleware.authCaptain`
- **Controller Method**: `captainController.logoutCaptain`