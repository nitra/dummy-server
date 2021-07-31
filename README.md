# Dummy HTTP Server

| Request Path | Response Status Code |
| ------------ | -------------------- |
| \*           | 200                  |

## Usage

```bash
docker run -p 80:80 --init nitra/dummy-server
```

## Build

```bash
docker build -t nitra/dummy-server .
docker push nitra/dummy-server
```

## test

```bash
curl -v http://localhost
npx autocannon http://localhost
wrk -t2 -c100 -d30s   http://localhost:80
```
