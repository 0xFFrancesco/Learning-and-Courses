
# Docker:

### Under the hood
- uses a linux kernel VM;
    - uses namespaces (to isolate the disk);
    - uses cgroups (to isolate resources).

### Docker Images
- Dockerfile to define the steps to create an image;
- Uses a temporary image and container for every step till the final image creation;
- A docker image is: a disk snapshot + an initial command.

### Basic CLI commands
- `docker build [-f FILENAME]`: build an image;
    - `-f FILENAME`: specify a specific Dockerfile (ex. `Dockerfile.dev`).
- `docker run IMAGE_ID`: run an image;
- `docker exec [-it] IMAGE_ID`: to execute a command in an already running container (ex. open a new shell);
    - `-it` maps stdin/stdout/stderr to the host console to make the container output it interactive and well formatted.
- `docker ps`: list all the running containers.

### Logs
- You can retrieve the logs of a running background container.

### Ports
- You can map with ports of host system to docker container.
- Example: `docker run -p 3000:8080`.

### Docker compose
- Docker-compose run multiple images at once and create a virtual network for them to communicate.
- You can reference the networked container with the label you provided in the `docker-compose.yml` file;
- In the `.yml` file you can specify the images, the ports, the volumes, the env variables, etc.

### Volumes
- Docker volumes allow you to access files on the host machine (as a reference) so that you can develop without rebuilding an image on every single change;
- Example:  `docker run -p 3000:8080  -v $(pwd):/app IMAGE_ID`;
- It overwrites everything in the target folder, unless you specify a previous folder without a target, in that case it will assume that that folder needs to be kept (ex. `-v /app/node_modules $(pws):/app` will maintain the app /app/node_modules intact in the container).

### Multi-phase dockerfile
- Use multiple base images (each defines a phase);
- You can then take output files from previous phases;
- When it finishes all images gets destroyed expect for the last, which defines the result.