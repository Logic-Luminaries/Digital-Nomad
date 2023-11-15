# Digital Nomad Web Application Setup

Follow these steps to set up and run the Digital Nomad web application on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (npm will be included)(make sure you have the latest versions installed/updated)
- [Git](https://git-scm.com/)

You need to have Git installed to use the `git clone` command for fetching the project repository. You can download and install Git from the official Git website: [https://git-scm.com/](https://git-scm.com/).

## Installation

1. Clone the Digital Nomad repository into a directory of your choice:

   ```shell
   git clone <repository_url> Digital_Nomad
   ```

   Replace `<repository_url>` with the URL of the Digital Nomad repository.

2. Navigate to the Digital Nomad project folder:

   ```shell
   cd Digital_Nomad
   ```

3. Switch to the development branch:

   ```shell
   git checkout development
   ```

4. Install the project dependencies:

   ```shell
   npm install
   ```

   This command will download and install all the required packages and libraries for the project. Be patient, as it may take a few moments to complete.

## Running the Application

5. Start the application on your local server:

   ```shell
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.

**Note:** During the installation process, you may encounter warnings about vulnerabilities related to certain packages. You can ignore these warnings for now, as they typically don't affect the functionality of the application in a local development environment.

You have successfully set up and launched the Digital Nomad web application on your local machine. Enjoy exploring and working with the application!
