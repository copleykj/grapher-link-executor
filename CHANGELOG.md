# Change Log

## 3.0.0

### Breaking Changes

- **Meteor 3.0 Required**: This version requires Meteor 3.0 or higher
- **Grapher 2.0 Required**: Updated dependency to `cultofcoders:grapher@2.0.0-rc.0`
- For Meteor 2.x projects, continue using version 2.0.1

### Changes

- Removed usage of internal `Meteor._ensure` API in favor of custom helper function
- Updated `api.versionsFrom` to target Meteor 3.0
- Updated TypeScript type definitions

## 2.0.1

### Bug Fixes

Fixes issue where matching link cannot be found when defining inverse link

## 2.0.0

### Breaking Changes

- The collection key of each link object now takes a collection instance rather than the name of the collection as a string. This fixes a bug where collections that don't have any links, but are linked to by another collection still have collection instances linked to them.
