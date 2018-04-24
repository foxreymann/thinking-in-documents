# Thinking in Documents

The goal of this exercise is to learn how to think in documents using MongoDB

## Exercise

### Part 1

Design the schema for mocks/data.json. Create a json file for every collection.

### Part 2

Make sure you have [MongoDB installed](https://docs.mongodb.com/manual/installation/). We recommend you to install a Mongo client, for instance [Robomongo](https://robomongo.org/download)

#### Tasks

1. Insert your documents in a Mongo server. You can use:
```
db.trainings.insertOne({
    "type" : "workshop",
    ...
})
```
2. Query the reviews of a given training. You can use:
```
db.trainings.find()
```
3. Update the rating of a training based on the reviews' rating.
```
db.courses.update({ "_id" : ObjectId("5a0b8754884b53e60d39f3e1”)}, {...})
```

## Links

*  [https://www.mongodb.com/blog/post/thinking-documents-part-1](https://www.mongodb.com/blog/post/thinking-documents-part-1)
* [https://www.mongodb.com/blog/post/thinking-documents-part-2](https://www.mongodb.com/blog/post/thinking-documents-part-2)
* [https://www.mongodb.com/nosql-explained](https://www.mongodb.com/nosql-explained)
* [https://docs.mongodb.com/manual/tutorial/query-documents/](https://docs.mongodb.com/manual/tutorial/query-documents/)
* [https://docs.mongodb.com/manual/tutorial/query-embedded-documents/](https://docs.mongodb.com/manual/tutorial/query-embedded-documents/)
* [https://docs.mongodb.com/manual/tutorial/query-arrays/](https://docs.mongodb.com/manual/tutorial/query-arrays/)
* [https://docs.mongodb.com/manual/tutorial/query-array-of-documents/](https://docs.mongodb.com/manual/tutorial/query-array-of-documents/)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
