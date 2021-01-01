# Change Log

## 2.0.0

### Breaking Changes

- The collection key of each link object now takes a collection instance rather than the name of the collection as a string. This fixes a bug where collections that don't have any links, but are linked to by another collection still have collection instances linked to them.
