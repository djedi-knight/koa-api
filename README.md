# Koa API

An example REST API application using [Koa](http://koajs.com/) and [Knex](http://knexjs.org/)

## Getting Started

*These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.*

### Prerequisites

*What things you need to install the software and how to install them*

```
Give examples
```

### Installation

*A step by step series of examples that tell you have to get a development env running*

*Say what the step will be*

```
Give the example
```

*And repeat*

```
until finished
```

*End with an example of getting some data out of the system or using it for a little demo*

## Development

### Knex CLI

Run the following command to globally install the Knex CLI:

```
npm install knex -g
```

### Creating a Migration

Run the following command to create a new migration file:

```
knex migrate:make name
```

where *name* is the name of the migration file

### Applying Migrations

Run the following to apply the latest migrations to the database:

```
knex migrate:latest --env environment
```

where *environment* is the name of the environment to apply the migrations

### Creating Seed Files

Run the following to create a seed file to populate the database:

```
knex seed:make name
```

where *name* is the name of the seed file

### Applying Seeds

Run the following to apply the seeding to the database:

```
knex seed:run --env environment
```

where *environment* is the name of the environment to apply the seeds

## Testing

Run automated tests for the system using the following command:

```
npm test
```

### Break down into end to end tests

*Explain what these tests test and why*

```
Give an example
```

### And coding style tests

*Explain what these tests test and why*

```
Give an example
```

## Deployment

*Add additional notes about how to deploy this on a live system*

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

*Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.*

## Versioning

*We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).*

## Authors

* **Shawn Daichendt** - *Initial work* - [djedi-knight](https://github.com/djedi-knight)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

*This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details*

## Acknowledgments

* [REST API Tutorial](http://mherman.org/blog/2017/08/23/building-a-restful-api-with-koa-and-postgres/#.WgCBG5OGN-V)
