import { Mongo } from 'meteor/mongo';
export declare function addLinks<T>(collection: Mongo.Collection<T>, links: object): void;
export declare const executeLinks: () => void;
