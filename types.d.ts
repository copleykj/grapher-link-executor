declare module 'meteor/meteor' {
    module Meteor {
        function _ensure(obj: object, ...properties: string[]): void
    }
}

declare module 'meteor/mongo' {
    module Mongo {
        interface Collection<T> {
            _name: string;
            addLinks(links: object): void;
        }
    }
}