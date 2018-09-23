How to build Docker with custom named DockerFile? U need to use -f key

```
docker build -f Dockerfile.dev .
```

What with changes in development? How to look for working directory?

```
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):app 1c24f2e3d27a
```
