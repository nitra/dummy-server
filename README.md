# Dummy HTTP Server

| Request Path | Response Status Code | Response Content Type | Response Content                                                                                                       |
| ------------ | -------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| \*           | 200                  | application/json      | {}                                                                                                                     |
| \graphql\*   | 200                  | application/json      | { "data": { "\_\_schema": { "types": [ { "name": "Query", "kind": "OBJECT" } ], "queryType": { "name": "Query" } } } } |

## Usage

```bash
docker run -p 80:80 --init nitra/dummy-server
# or
yarn start
```

## Build

```bash
docker build -t nitra/dummy-server .
docker push nitra/dummy-server

docker buildx build . --progress=plain --platform linux/arm64 --tag nitra/dummy-server:manifest-arm64 --push
docker buildx build . --progress=plain --platform linux/amd64 --tag nitra/dummy-server:manifest-amd64 --push

docker manifest create nitra/dummy-server:latest \
--amend nitra/dummy-server:manifest-amd64 \
--amend nitra/dummy-server:manifest-arm64

docker manifest push nitra/dummy-server:latest
```

## test

```bash
yarn test
# or
yarn test-graphql
# or
curl -v http://localhost
# or
npx autocannon http://localhost
# or
wrk -t2 -c100 -d30s   http://localhost:80
```
