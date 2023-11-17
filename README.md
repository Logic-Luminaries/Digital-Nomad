# Digital Nomad Installation Guide

Follow these steps to set up and run the Digital Nomad web application on your local machine.

## Prerequisites

Before you begin, ensure that you have the latest versions of the following dependencies installed on your system. If not, download or update them from their official websites provided below.

- [Node.js](https://nodejs.org/) (It is essential to have Node.js installed to utilize the `npm` command and install the project dependencies)
- [Git](https://git-scm.com/downloads) (It is essential to have Git installed to utilize the `git clone` command and fetch the project repository)

## Installation

1. Clone the Digital Nomad repository into a directory of your choice:

   ```
   git clone https://github.com/Logic-Luminaries/Digital-Nomad.git Digital-Nomad
   ```

2. Navigate to the Digital Nomad project folder:

   ```
   cd Digital-Nomad
   ```

3. Switch to the development branch (Please note individual work branches were merged into development after client approval) :

   ```
   git checkout Development
   ```

4. Install the project dependencies:

   ```
   npm install
   ```

  Command 4 will download and install all the required packages and libraries for the project. Be patient, as it may take a few moments to complete.

## Running the application

1. Start the application on your local server:

   ```
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

## Errors when running the application

If you encounter any errors on `npm start`, please follow the steps below to ensure that you have version 20.5.1 of Node installed.

1. Install a Node Version Manager (NVM) by running the following command in your terminal:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

2. Run the following in your terminal
```
source ~/.bashrc
```

3. Install Node version 20.5.1 which the project requires
```
nvm install 20.5.1
```

You should no longer receive any errors when running `npm start`


**Note:** During the installation process, you may encounter warnings about vulnerabilities related to certain packages. You can ignore these warnings for now, as they typically don't affect the functionality of the application in a local development environment.
------------------------------
You have successfully set up and launched the Digital Nomad web application on your local machine. Enjoy exploring and working with the application!
