#! /bin/sh

# setup for npm credentials
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

if [ "$TAG_NEXT" == "true" ]; then
  # if we want to publish a testing version
  npm install --unsafe-perm --no-optional \
    && npm run build:ts \
    && npm publish --access public --tag next
else
  # production publish, uses version in package.json
  npm install --unsafe-perm --no-optional \
    && npm run build:ts \
    && npm publish --access public
fi
