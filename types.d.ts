declare module 'meteor/mongo' {
    module Mongo {
        interface Collection<T> {
            _name: string;
            addLinks(links: object): void;
        }
    }
}