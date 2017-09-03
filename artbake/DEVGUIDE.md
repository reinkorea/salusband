1. 개발환경
===========================================
1. Create the application
-------------------------------------------
- Prerequsites
 * Install Java 8, Maven, Git and Node.js
 * npm install -g yo
 * npm install -g bower
 * npm install -g gulp
 * npm install -g generator-jhipster
- Create the application
 * create directory and move to it
 * yo jhipster

2. Questions asked when generating an application
----------------------------------------------
- Which type of application would you like to create?
 * Monolithic application
 * Microservice application
 * Microservice gateway
 * JHipster UAA server[BETA]
- What is the base name of your application?
- What is your default Java package name?
- Do you want to use the JHipster Registry to configure, monitor and scale your applications?
 * The JHipster Registry is an Open Source tool used to manage your application at runtie.
 * It is required when using a microservices architecture (this is why this question is only asked when generating a monolith)
 * The JHipster Registry has three main purposes:
  > It is a an Eureka server, that servers as a discovery server for applications. This is how JHipster handles routing, load balancing and scalability for all applications.
  > It is a Spring Cloud Config server, that provide runtime configuration to all applications.
  > It is an administration server, with dashboards to monitor and manage applications.
- Which type of authentication would you like to use?
 * This question won't be asked if you selected the JHipster Registry, as it requires the use of JWT authentication.
 * The OAuth 2.0 and JWT approaches allow to use a stateles application architecture (they do not rely on the HTTP Session).
- Which type of database would you like to use?
- Which production database would you like to use?
 * This is the database you will use with your "production" profile. To configure it, please modify your src/main/resources/config/application-prod.yml file.
- Which development database would you like to use?
- Do you want to use Hibernate 2nd level cache?
 * Hibernate is the JPA provider used by JHIPSTER. For performance reasons, we highly recommend you to use a cache, and to tune it according to your application's needs. If you choose to do so, you can use either ehcache(local cache) or Hazelcast(distributed cache, for use in a clustered environment).
- Would you like to use Maven or Gradle?
 * You an build your generated Java application either with Maven or Gradle. Mven is most stable and more mature. Gradle is more fleible, easier to extend, and more hype.
- Which other technologies would you like to use?
 * Social login (Google, Facebook, Twitter): This option is only available if you selected an SQL database or MongoDB database. It adds Spring Social support to JHipster, so end-users can log-in using their Google, Facebook or Twitter account.
 * API first development using swagger-codegen: This option lets you do API-first development for your application by integrating the Swagger-Codegen into the build.
 * Search engine using ElasticSearch: Elasticsearch will be configured using Spring Data Elasticsearch.
 * WebSockets using Spring Websocket: Websockets can be enabled using Spring Websocket. We also provide a complete sample to show you how to use the framework efficiently.
- Which Framework would you like to use for the client?
 * Angular version 4 +
 * AngularJS version 1.x (which will be deprecated in the future)
- Would you like to use the LibSass stylesheet preprocessor for your CSS?
 * Node-sass a great solution to simplify designing CSS. To be used efficiently, you will need to run a Gulp server, which will be configured automatically.
- Would you like to enable internationalization support?
- Which testing frameworks would you like to use?
 * By default JHipster provide Java unit/integration testing (using Spring's JUint support) and JavaScript unit testing (using Karma.js). As an option you can also add support for Performance tests using Gatling, Behavior tests using Cucumber, Angular integration tests with Protractor.
- Would you like to install other generators from the JHipster Marketplace?
 * The JHipster Marketplace is where you can install additional modules, written by third-party developers, to add non-official features to your project.

3. generator-jhipster procedure after asking
------------------------------------------
- created a whole bunch of files.
- ran "npm install".
- ran "bower install"/"yarn install".

4. prove everything was good to go
------------------------------------------
- Angular 4+
 * ran Java unit tests using "./mvnw test"/"yarn test".
 * started the app using "./mvnw"/"yarn start".
 * ran the UI integration tests with "gulp itest".
- AngularJS 1.x
 * Server application generated successfully.
 * Run your Spring Boot application:
 * ./mvnw (mvnw if using Windows Command Prompt)
 * Client application generated successfully.
 * Inject your front end dependencies into your source code:
 * gulp inject
 * Generate the AngularJS constants:
 * gulp ngconstant:dev
 * Compile your Sass style sheets:
 * gulp sass
 * Or do all of the above:
 * gulp install

5. prove the prod profile worked
-------------------------------------------
- install mariadb
- create user in mariadb
- create database in mariadb
- grant on created database to user
- update application-prod.yml
- run "./mvnw -Pprod

6. install Bootstrap Material Design module in the JHipster Marketplace
---------------------------------------------------------
- Bootstrap was all the range of a couple of years ago.
- But Google's material design is growing in popularity.