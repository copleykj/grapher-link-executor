# Grapher Link Executor

This package allows you to define your grapher links along side your collection definitions while avoiding circular imports which cause `invalid config` errors when the collection key of your link is undefined.

- [Support](#support)
- [Installation](#installation)
- [TypeScript](#typescript)
- [Usage](#usage)
  - [addLinks(CollectionInstance, LinkDefinition)](#addlinkscollectioninstance-linkdefinition)
  - [executeLinks()](#executelinks)

## Support

If you find this package useful, please consider supporting my work through [Patreon](https://www.patreon.com/copleykj), or [Paypal](https://paypal.me/copleykj). A few dollars a month on Patreon can help maintain this package and support the additional creation of other packaages and content such as video tutorials demonstrating package usage.

## Installation

```sh
meteor add copleykj:grapher-link-executor
```

## TypeScript

This package does not require you to use TypeScript, but it is written in TypeScript and includes type definitions in `grapher-link-executor.d.ts` in case you are.

Unfortunately these aren't automatically picked up by editors such as VSCode and they will need to be copied into your projects type defintions manually.

```ts
declare module 'meteor/copleykj:grapher-link-executor' {
    import { Mongo } from 'meteor/mongo'
    export function addLinks<T>(collection: Mongo.Collection<T>, links: object): void;
    export const executeLinks: () => void;
}
```

## Usage

There are 2 functions exported from this package `addLinks` and `executeLinks`.

### addLinks(CollectionInstance, LinkDefinition)

`addLinks` is similar to the function added to `Mongo.Collection` by `cultofcoders:grapher` except it takes a Collection as it's first argument, and the link definitions as it's second.

> **Note**
>
>The link definition passed to `addLinks` is almost identical as you would pass to `Collection.addLinks` with the exception of the `collection` key which is a string (the same as passed to the colleciton constructor) instead of the collection instance itself.

```ts
// /api/posts.ts
import { addLinks } from "meteor/copleykj:grapher-link-executor";

export interface Post {
    id?: string;
    authorId: string;
    text: string;
}

export const PostsCollection = new Mongo.Collection<Post>('posts');

addLinks(PostsCollection, {
    'author': {
        type: 'one',
        field: 'authorId',
        collection: 'users', // notice this is the name, and not the instance
    }
});
```

```ts
// /api/users.ts

import { Meteor } from 'meteor/meteor';
import { Post} from './posts';
import { addLinks } from 'meteor/copleykj:grapher-link-executor';

export interface User extends Meteor.User {
    posts: Post[]
}

export const UsersCollection = Meteor.users;

export const Queries = {
    AllUsers: UsersCollection.createQuery('allUsersQuery', {
        _id: 1,
        username: 1,
        posts: {
            text: 1
        }
    }),
}


addLinks(UsersCollection, {
    'posts': {
        collection: 'posts',
        inversedBy: 'author'
    }
});
```

### executeLinks()

`executeLinks` takes all the links and commits them to your collections by calling `Collection.addLinks` and ensuring that all the collection keys are defined, and the inverse links are added after the rest of the links. Call this function either from a file that is loaded on both client and server, or from one file in the server and one on the client.

```ts
// /api/index.ts

import { executeLinks } from 'meteor/copleykj:grapher-link-executor';

export { Post, PostsCollection } from './posts';
export { User, UsersCollection, Queries } from './users';


executeLinks();
```
