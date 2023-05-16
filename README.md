# WebApp

# Documentation

## Functional
* ToDo list app
* Park list app
* Pen collection app
* Table interface app
* Database Local with ZeroTier for development
* Database connection layer (SQLAlchemy)
* Web Framework (Flask--backend, Bootstrap or react--frontend)
* Connection to raspberry pi on local network. 

## Non-Functional
* Modular ["Large application"](https://www.digitalocean.com/community/tutorials/how-to-structure-large-flask-applications#structuring-the-application-directory) file system. 
* [Model-View-Controller pattern](#model-view-controller-(mvc)-pattern:)
* [Repository pattern](#repository-pattern:)
* [Service-oriented architecture (SOA) pattern](#service-oriented-architecture-(soa)-pattern:)
* [Facade pattern](#facade-pattern:)
* [Caching pattern](#caching-pattern:)
* CI/CD for automated testing and deployment (Github workflows). 
* Availability on demand from anywhere. DigitalOcean? Linode? other?
* Low Cost
* Easy to maintain (good documentation). 
* Docker Container?

## Non-Required 
* Encryption handling.
* Secure Auth. 


## Database Diagrams
[UML Diagram Link](https://github.com/users/Keegan2021/projects/3/views/1?pane=issue&itemId=25184888)

## Context Diagram
![Context Diagram](Diagrams/Context%20diagram.png)

## Design Patterns
### Model-View-Controller (MVC) pattern:
    This pattern is commonly used in web applications and helps to separate the application's user interface (View) from the application's business logic
    (Model) and control flow (Controller). This can help make your code more modular, easier to maintain, and more flexible to change.
### Repository pattern:
    This pattern is used to abstract the data access layer of your application from the rest of the application. This can help to make your code more 
    testable, more maintainable, and easier to change over time.
### Service-oriented architecture (SOA) pattern:
    This pattern involves breaking down your application into smaller, self-contained services that communicate with each other through standardized interfaces. This can help to make your application more scalable, more resilient to failure, and easier to update and maintain.
### Facade pattern:
    This pattern provides a simplified interface to a complex system. In the context of a web application with a cloud-hosted database, you might use a facade to simplify the interface to your database, or to abstract away some of the complexity of working with a cloud-based service.

    The Facade pattern is a structural design pattern that provides a simplified interface to a complex system. The main idea behind the Facade pattern is to create a higher-level interface that makes it easier for clients to interact with a complex system, by providing a simplified, streamlined interface that hides the underlying complexity.

    In a typical implementation of the Facade pattern, the Facade acts as an intermediary between clients and the underlying system, handling requests from clients and passing them on to the appropriate components of the system. The Facade may also be responsible for translating requests from the client into the format required by the underlying system, and for translating responses from the system into a format that is understandable by the client.

The benefits of using the Facade pattern include:
    - Simplified interface: The Facade pattern provides a simpler and more intuitive interface to a complex system, which can help to reduce the cognitive load on clients and make it easier to use the system.
- Encapsulation of complexity: By hiding the underlying complexity of the system behind a simpler interface, the Facade pattern can help to encapsulate the complexity of the system and make it easier to maintain and evolve over time.
- Improved flexibility: Because the Facade provides a layer of abstraction between clients and the underlying system, it can be easier to change the implementation of the system without affecting the clients.

    In the context of a web application with a cloud-hosted database, a Facade pattern might be used to simplify the interface to the database, or to hide some of the complexity of working with a cloud-based database service. For example, the Facade might provide a simpler API to the database that abstracts away some of the details of the underlying service, or it might handle connection pooling, caching, or other optimizations that are required when working with a cloud-based database.
### Caching pattern:
    This pattern involves storing frequently accessed data in memory, or in a faster storage layer, to reduce the number of queries made to your database. This can help to improve the performance of your application and reduce the load on your database.